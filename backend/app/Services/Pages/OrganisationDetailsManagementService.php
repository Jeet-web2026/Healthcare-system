<?php

namespace App\Services\Pages;

use App\Enums\GlobalCachingEnum;
use App\Http\Resources\Common\OrganisationdetailsResource;
use App\Repository\Interface\CacheServiceInterface;
use App\Repository\Interface\OrganisationDetailsManagementServiceInterface;
use App\Repository\Interface\OrganisationDetailsRepositoryInterface;
use Exception;
use Illuminate\Support\Facades\DB;

class OrganisationDetailsManagementService implements OrganisationDetailsManagementServiceInterface
{
    public function __construct(protected OrganisationDetailsRepositoryInterface $organisationRepository, protected CacheServiceInterface $cacheService) {}

    public function oganisationDetails()
    {
        return $this->cacheService->remember(
            GlobalCachingEnum::ORG_DETAILS->value,
            now()->addMinutes(5),
            fn() => OrganisationdetailsResource::make($this->organisationRepository->getOrganisationDetails())
        );
    }

    public function createOrganizationDetailsData(array $request)
    {
        try {
            $isExsisting = $this->organisationRepository->getOrganisationDetails();

            if ($isExsisting) {
                return $this->updateOrganizationDetailsData($request, (int)$isExsisting->id);
            }

            $result = DB::transaction(function () use ($request) {
                return $this->organisationRepository->createOrganizationDetailsData($request);
            });

            $this->cacheService->forget(GlobalCachingEnum::ORG_DETAILS->value);

            return $result;
        } catch (Exception $th) {
            throw $th;
        }
    }

    public function updateOrganizationDetailsData(array $request, int $id)
    {
        try {
            $result = DB::transaction(function () use ($request, $id) {
                return $this->organisationRepository->updateOrganizationDetailsData($request, $id);
            });

            $this->cacheService->forget(GlobalCachingEnum::ORG_DETAILS->value);

            return $result;
        } catch (Exception $th) {
            throw $th;
        }
    }
}
