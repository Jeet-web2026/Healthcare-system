<?php

namespace App\Repository\Interface;

use App\Models\OrgDetails;

interface OrganisationDetailsRepositoryInterface
{
    public function getOrganisationDetails(): OrgDetails;
    public function createOrganizationDetailsData(array $request): OrgDetails;
    public function updateOrganizationDetailsData(array $request, string $id): OrgDetails;
    public function fetchOrganisationDetailsById(int $id): OrgDetails;
}
