<?php

namespace App\Services\User;

use App\Enums\GlobalMessages;
use App\Events\UserRegistered;
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

                $authToken = JWTAuth::fromUser($user);

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
}
