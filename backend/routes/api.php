<?php

use App\Http\Controllers\Api\Auth\AuthmanagementController;
use App\Http\Controllers\Pages\HomeController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::controller(AuthmanagementController::class)->group(function () {
            Route::post('register', 'register');
            Route::post('email-verification', 'emailVerification');
            Route::post('login', 'login');

            Route::middleware('auth:api')->group(function () {
                Route::post('logout', 'logout');
            });
        });
    });

    Route::prefix('home')->controller(HomeController::class)->group(function () {
        Route::get('/', 'index');
        Route::get('/organisation-details', 'orgDetails');
    });
});
