<?php

namespace App\Services\User;

use App\Enums\GlobalMessages;
use App\Events\UserRegistered;
use App\Repository\Interface\AuthenticationServiceInterface;
use App\Repository\Interface\UserManagementRepositoryInterface;
use App\Traits\ResponseTrait;
use Exception;
use Symfony\Component\HttpFoundation\Response;

class AuthService implements AuthenticationServiceInterface
{
    use ResponseTrait;
    public function __construct(protected UserManagementRepositoryInterface $userManagement) {}

    public function registerUser(array $request)
    {
        try {
            $userData = $this->userDatastructure($request);

            $otp = rand(100000, 999999);
            $this->sentEmail($userData['email'], (int)$otp);

            $newUser = $this->userManagement->create($userData);

            return $this->successResponse(true, GlobalMessages::CREATED->withResource('User'), $newUser, Response::HTTP_CREATED);
        } catch (Exception $th) {
            return $this->errorResponse(false, GlobalMessages::SOMETHING_WENT_WRONG->value, null);
        }
    }

    protected function userDatastructure(array $request): array
    {
        return [
            'email' => $request['email'],
            'password' => $request['password'],
        ];
    }

    protected function sentEmail(string $email, int $otp)
    {
        event(new UserRegistered(
            email: $email,
            otp: $otp
        ));
    }
}
