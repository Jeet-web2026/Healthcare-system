<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\EmailVerificationrequest;
use App\Http\Requests\Api\Auth\LoginRequest;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Repository\Interface\AuthenticationServiceInterface;
use Illuminate\Http\Request;

class AuthmanagementController extends Controller
{
    public function __construct(private readonly AuthenticationServiceInterface $authService) {}

    public function register(RegisterRequest $request)
    {
        return $this->authService->registerUser($request->validated());
    }

    public function emailVerification(EmailVerificationrequest $request)
    {
        return $this->authService->emailVerification($request->email, $request->otp);
    }

    public function login(LoginRequest $request)
    {
        return $this->authService->login($request->email, $request->password);
    }

    public function logout(Request $request)
    {
        return $this->authService->logout($request);
    }
}
