<?php

namespace App\Services\Pages;

use App\Enums\GlobalCachingEnum;
use App\Repository\Interface\CacheServiceInterface;
use App\Repository\Interface\HomeServiceInterface;
use App\Repository\Interface\HomeServiceRepositoryInterface;

class HomeService implements HomeServiceInterface
{
    public function __construct(
        protected HomeServiceRepositoryInterface $homeRepository,
        protected CacheServiceInterface $cacheService
    ) {}

    public function index()
    {
        return $this->cacheService->rememberForever(
            GlobalCachingEnum::HOME_BANNER->value,
            function () {
                return $this->homeRepository->bannerData();
            }
        );
    }
}
