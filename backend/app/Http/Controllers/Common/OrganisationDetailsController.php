<?php

namespace App\Http\Controllers\Common;

use App\Enums\GlobalMessages;
use App\Http\Controllers\Controller;
use App\Http\Requests\Common\CreateOrganisationDataRequest;
use App\Http\Requests\Common\UpdateOrganisationDataRequest;
use App\Repository\Interface\OrganisationDetailsManagementServiceInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;

class OrganisationDetailsController extends Controller
{
    use ResponseTrait;
    public  function __construct(private OrganisationDetailsManagementServiceInterface $organisationDetails) {}

    public function orgDetails(): JsonResponse
    {
        $organisationDetails = $this->organisationDetails->oganisationDetails();
        return $this->successResponse(true, GlobalMessages::DATA_FETCHED->value, $organisationDetails);
    }

    public function createOrganizationDetailsData(CreateOrganisationDataRequest $request): JsonResponse
    {
        $organisationDetails = $this->organisationDetails->createOrganizationDetailsData($request->validated());
        return $this->successResponse(true, GlobalMessages::DATA_CREATED->withResource('Organisation details'), $organisationDetails);
    }

    public function updateOrganizationDetailsData(UpdateOrganisationDataRequest $request, string $id): JsonResponse
    {
        $organisationDetails = $this->organisationDetails->updateOrganizationDetailsData($request->validated(), $id);
        return $this->successResponse(true, GlobalMessages::DATA_UPDATED->withResource('Organisation details'), $organisationDetails);
    }
}
