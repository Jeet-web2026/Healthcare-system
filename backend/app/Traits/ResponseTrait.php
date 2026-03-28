<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

trait ResponseTrait
{
    public function successResponse(bool $status = true, string $message, $data, int $statusCode = Response::HTTP_OK): JsonResponse
    {
        return response()->json([
            'success' => $status,
            'message' => $message,
            'data' => $data
        ], $statusCode);
    }

    public function errorResponse(bool $status = false, string $message, $data, int $statusCode = Response::HTTP_INTERNAL_SERVER_ERROR): JsonResponse
    {
        return response()->json([
            'success' => $status,
            'message' => $message,
            'data' => $data
        ], $statusCode);
    }
}
