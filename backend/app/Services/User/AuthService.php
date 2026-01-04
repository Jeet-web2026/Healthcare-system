<?php

namespace App\Services\User;

use App\Events\UserRegistered;
use App\Repository\Interface\UserManagementRepositoryInterface;
use Illuminate\Support\Facades\DB;

class AuthService
{
    public function __construct(protected UserManagementRepositoryInterface $userManagement) {}

    public function registerUser(array $request)
    {
        $registeredUser = DB::transaction(function () use ($request) {
            $userData = $this->userDatastructure($request);

            $otp = rand(100000, 999999);
            $isemailSent = $this->sentEmail($userData['email'], (int)$otp);
            if ($isemailSent !== null) {
                $this->userManagement->create($userData);
            }
        });

        if ($registeredUser) {
            return $registeredUser;
        }
    }

    protected function userDatastructure(array $request): array
    {
        return [
            'email' => $request['email'],
            'password' => $request['password'],
        ];
    }

    protected function sentEmail(string $email, int $otp): void
    {
        event(new UserRegistered(
            email: $email,
            otp: $otp
        ));
    }
}
