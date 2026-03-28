<?php

namespace App\Repository\Interface;

interface AuthenticationServiceInterface
{
    public function registerUser(array $request);
    public function emailVerification(string $email, int $otp);
}
