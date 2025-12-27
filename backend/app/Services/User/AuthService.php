<?php

namespace App\Services\User;

use App\Repository\Interface\UserManagementRepositoryInterface;
use Illuminate\Support\Facades\DB;

class AuthService
{
    public function __construct(protected UserManagementRepositoryInterface $userManagement) {}

    public function registerUser(array $request)
    {
        $registeredUser = DB::transaction(function () use ($request) {

        });

        return $registeredUser;
    }
}
