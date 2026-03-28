<?php

namespace App\Providers;

use App\Repository\Eloquent\UserManagementRepository;
use App\Repository\Interface\AuthenticationServiceInterface;
use App\Repository\Interface\UserManagementRepositoryInterface;
use App\Services\User\AuthService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }


    public function boot(): void
    {
        $this->app->bind(
            UserManagementRepositoryInterface::class,
            UserManagementRepository::class
        );

        $this->app->bind(
            AuthenticationServiceInterface::class,
            AuthService::class
        );
    }
}
