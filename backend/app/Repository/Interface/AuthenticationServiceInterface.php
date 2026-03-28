<?php

namespace App\Repository\Interface;

interface AuthenticationServiceInterface
{
    public function registerUser(array $request);
    public function emailVerification(string $email, int $otp);
    public function login(string $email, string $password);
    public function logout($request);
}
