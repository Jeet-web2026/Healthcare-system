<?php

namespace App\Services\User;

use App\Enums\GlobalMessages;
use App\Events\UserRegistered;
use App\Http\Resources\Registration\LoginResponseResource;
use App\Http\Resources\Registration\RegistrationResponseResource;
use App\Repository\Interface\AuthenticationServiceInterface;
use App\Repository\Interface\UserManagementRepositoryInterface;
use App\Traits\ResponseTrait;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthService implements AuthenticationServiceInterface
{
    use ResponseTrait;
    public function __construct(protected UserManagementRepositoryInterface $userManagementRepository) {}

    // ------------------------------------
    // Registration
    // ------------------------------------

    public function registerUser(array $request): JsonResponse
    {
        try {
            $otp = rand(100000, 999999);
            $userData = $this->userDatastructure($request, $otp);
            $newUser = $this->userManagementRepository->create($userData);

            if ($newUser) {
                $this->sentEmail($userData['email'], (int)$otp);
            }

            return $this->successResponse(true, GlobalMessages::CREATED->withResource('User'), new RegistrationResponseResource($newUser), Response::HTTP_CREATED);
        } catch (Exception $th) {
            Log::error('Registration error ', [$th->getMessage()]);
            return $this->errorResponse(false, GlobalMessages::SOMETHING_WENT_WRONG->value, null);
        }
    }

    protected function userDatastructure(array $request, int $otp): array
    {
        return [
            'email' => $request['email'],
            'password' => $request['password'],
            'otp' => $otp,
            'is_active' => false,
            'verification_time' => now()->addMinute(15)
        ];
    }

    protected function sentEmail(string $email, int $otp)
    {
        event(new UserRegistered(
            email: $email,
            otp: $otp
        ));
    }

    //------------------------------------
    // Email Verification
    // ------------------------------------

    public function emailVerification(string $email, int $otp): JsonResponse
    {
        try {
            $user = $this->userManagementRepository->findByEmail($email);

            if (!$user) {
                return $this->errorResponse(false, GlobalMessages::NOT_FOUND->withResource('User'), null, Response::HTTP_NOT_FOUND);
            }

            if ((int)$user->otp === (int)$otp) {
                $this->userManagementRepository->update($user->id, [
                    'email_verified_at' => now(),
                    'is_active' => true,
                    'otp' => null
                ]);

                $user = $user->fresh();

                $authToken = $this->generateAuthToken($user);

                return $this->successResponse(
                    true,
                    GlobalMessages::EMAILVERIFICATIONCOMPLETED->value,
                    ['token_type' => 'bearer', 'auth_token' => $authToken, 'user' => new RegistrationResponseResource($user)],
                    Response::HTTP_OK
                );
            }

            return $this->errorResponse(
                false,
                GlobalMessages::EMAILVERIFICATIONFAILED->value,
                null
            );
        } catch (Exception $th) {
            Log::error('Email verification error ', [$th->getMessage()]);
            return $this->errorResponse(false, GlobalMessages::SOMETHING_WENT_WRONG->value, null);
        }
    }

    //------------------------------------
    // Login
    // ------------------------------------

    public function login(string $email, string $password): JsonResponse
    {
        try {
            $credentials = ['email' => $email, 'password' => $password];

            if (!$token = JWTAuth::attempt($credentials)) {
                return $this->errorResponse(false, GlobalMessages::INVALID_CREDENTIALS->value, null, Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            $user = $this->userManagementRepository->findByEmail($email);
            $this->userManagementRepository->update($user->id, ['last_login' => now()]);
            $user = $user->fresh();
            
            return $this->successResponse(
                true,
                GlobalMessages::LOGINSUCCESS->value,
                ['token_type' => 'bearer', 'auth_token' => $token, 'user' => new LoginResponseResource($user)],
                Response::HTTP_OK
            );
        } catch (Exception $th) {
            Log::error('Login error ', [$th->getMessage()]);
            return $this->errorResponse(false, GlobalMessages::SOMETHING_WENT_WRONG->value, null);
        }
    }

    //------------------------------------
    // Token generation
    // ------------------------------------

    private function generateAuthToken($user): string
    {
        return JWTAuth::fromUser($user);
    }
}
