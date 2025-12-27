<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\RegisterRequest;

class AuthmanagementController extends Controller
{
    public function register(RegisterRequest $request)
    {
        return response()->json([
            'message' => 'User registered successfully',
        ], 201);
    }
}
