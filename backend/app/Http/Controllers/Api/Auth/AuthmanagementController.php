<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Repository\Interface\AuthenticationServiceInterface;

class AuthmanagementController extends Controller
{
    public function __construct(private readonly AuthenticationServiceInterface $authService) {}

    public function register(RegisterRequest $request)
    {
        return $this->authService->registerUser($request->validated());
    }
}
