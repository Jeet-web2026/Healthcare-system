<?php

namespace App\Providers;

use App\Repository\Eloquent\AboutusRepository;
use App\Repository\Eloquent\HomeRepository;
use App\Repository\Eloquent\OrganisationDetailsRepository;
use App\Repository\Eloquent\UserManagementRepository;
use App\Repository\Eloquent\WhoweareRepository;
use App\Repository\Interface\AboutusRepositoryInterface;
use App\Repository\Interface\AboutusServiceInterface;
use App\Repository\Interface\AuthenticationServiceInterface;
use App\Repository\Interface\CacheServiceInterface;
use App\Repository\Interface\HomeServiceInterface;
use App\Repository\Interface\HomeServiceRepositoryInterface;
use App\Repository\Interface\OrganisationDetailsManagementServiceInterface;
use App\Repository\Interface\OrganisationDetailsRepositoryInterface;
use App\Repository\Interface\UserManagementRepositoryInterface;
use App\Repository\Interface\WhoweareRepositoryInterface;
use App\Repository\Interface\WhoweareServiceInterface;
use App\Services\CacheService;
use App\Services\Pages\AboutusService;
use App\Services\Pages\HomeService;
use App\Services\Pages\OrganisationDetailsManagementService;
use App\Services\Pages\WhoweareService;
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
            CacheServiceInterface::class,
            CacheService::class
        );

        $this->app->bind(
            UserManagementRepositoryInterface::class,
            UserManagementRepository::class
        );

        $this->app->bind(
            AuthenticationServiceInterface::class,
            AuthService::class
        );

        $this->app->bind(
            HomeServiceInterface::class,
            HomeService::class
        );

        $this->app->bind(
            HomeServiceRepositoryInterface::class,
            HomeRepository::class
        );

        $this->app->bind(
            AboutusServiceInterface::class,
            AboutusService::class
        );

        $this->app->bind(
            AboutusRepositoryInterface::class,
            AboutusRepository::class
        );

        $this->app->bind(
            OrganisationDetailsManagementServiceInterface::class,
            OrganisationDetailsManagementService::class
        );

        $this->app->bind(
            OrganisationDetailsRepositoryInterface::class,
            OrganisationDetailsRepository::class
        );

        $this->app->bind(
            WhoweareServiceInterface::class,
            WhoweareService::class
        );

        $this->app->bind(
            WhoweareRepositoryInterface::class,
            WhoweareRepository::class
        );
    }
}
