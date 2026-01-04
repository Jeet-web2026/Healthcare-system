<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Services\User\AuthService;

class AuthmanagementController extends Controller
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function register(RegisterRequest $request)
    {
        $user = $this->authService->registerUser($request->validated());

        if ($user) {
            return response()->json([
                'message' => 'User registered successfully',
                'data' => $user
            ], 201);
        }
        return response()->json([
            'message' => 'User registration failed'
        ], 500);
    }
}
