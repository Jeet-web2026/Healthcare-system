<?php

namespace App\Services\Pages;

use App\Enums\GlobalCachingEnum;
use App\Http\Resources\HomepageresponseResource;
use App\Repository\Interface\CacheServiceInterface;
use App\Repository\Interface\HomeServiceInterface;
use App\Repository\Interface\HomeServiceRepositoryInterface;
use App\Repository\Interface\OrganisationDetailsManagementServiceInterface;

class HomeService implements HomeServiceInterface
{
    public function __construct(
        protected HomeServiceRepositoryInterface $homeRepository,
        protected OrganisationDetailsManagementServiceInterface $organisationDetailsService,
        protected CacheServiceInterface $cacheService
    ) {}

    public function index()
    {
        return $this->cacheService->rememberForever(
            GlobalCachingEnum::HOME_BANNER->value,
            function () {
                $bannerData = $this->homeRepository->bannerData();
                $organisationDetails = $this->organisationDetailsService->organizationdetails();

                $merged_data = array_merge(
                    $bannerData->toArray(),
                    $organisationDetails->toArray()
                );
                return new HomepageresponseResource($merged_data);
            }
        );
    }
}
