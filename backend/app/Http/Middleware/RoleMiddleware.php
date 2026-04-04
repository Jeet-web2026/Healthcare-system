<?php

namespace App\Http\Middleware;

use App\Enums\GlobalMessages;
use App\Traits\ResponseTrait;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    use ResponseTrait;
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        $user = Auth::guard('api')->user() ?? Auth::user();

        if (!$user) {
            return $this->errorResponse(
                false,
                GlobalMessages::AUTHENTICATION_REQUIRED->value,
                null,
                Response::HTTP_UNAUTHORIZED
            );
        }

        if (!in_array($user->role, $roles)) {
            return $this->errorResponse(
                false,
                GlobalMessages::UNAUTHORIZED->value,
                null,
                Response::HTTP_FORBIDDEN
            );
        }

        return $next($request);
    }
}
