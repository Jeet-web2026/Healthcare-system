<?php

namespace App\Services\Pages;

use App\Enums\GlobalCachingEnum;
use App\Http\Resources\HomepageresponseResource;
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
                $bannerData = $this->homeRepository->bannerData();

                return new HomepageresponseResource($bannerData);
            }
        );
    }

    public function createHomePageData(array $data)
    {
        $result = $this->homeRepository->createHomePageData($data);

        $this->cacheService->forget(GlobalCachingEnum::HOME_BANNER->value);

        return $result;
    }

    public function updateHomePageData(int $id, array $data)
    {
        $result = $this->homeRepository->updateHomePageData($id, $data);

        $this->cacheService->forget(GlobalCachingEnum::HOME_BANNER->value);

        return $result;
    }
}
