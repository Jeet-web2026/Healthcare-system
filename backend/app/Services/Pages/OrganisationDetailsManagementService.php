<?php

namespace App\Services\Pages;

use App\Enums\GlobalCachingEnum;
use App\Repository\Interface\CacheServiceInterface;
use App\Repository\Interface\OrganisationDetailsManagementServiceInterface;
use App\Repository\Interface\OrganisationDetailsRepositoryInterface;

class OrganisationDetailsManagementService implements OrganisationDetailsManagementServiceInterface
{
    public function __construct(protected OrganisationDetailsRepositoryInterface $organisationRepository, protected CacheServiceInterface $cacheService) {}

    public function organizationdetails()
    {
        return $this->cacheService->remember(
            GlobalCachingEnum::ORG_DETAILS->value,
            now()->addMinutes(5),
            fn() => $this->organisationRepository->getOrganisationDetails()
        );
    }
}
