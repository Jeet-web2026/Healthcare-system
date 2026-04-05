<?php

namespace App\Repository\Eloquent;

use App\Models\OrgDetails;
use App\Repository\Interface\OrganisationDetailsRepositoryInterface;

class OrganisationDetailsRepository implements OrganisationDetailsRepositoryInterface
{
    public function getOrganisationDetails(): OrgDetails
    {
        return OrgDetails::first();
    }

    public function createOrganizationDetailsData(array $request): OrgDetails
    {
        return OrgDetails::create($request);
    }

    public function updateOrganizationDetailsData(array $request, string $id): OrgDetails
    {
        $organisationDetails = $this->fetchOrganisationDetailsById((int)$id);
        $organisationDetails->update($request);
        return $organisationDetails;
    }

    public function fetchOrganisationDetailsById(int $id): OrgDetails
    {
        return OrgDetails::findOrFail($id);
    }
}
