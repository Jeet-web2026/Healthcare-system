<?php

namespace App\Repository\Interface;


interface OrganisationDetailsManagementServiceInterface
{
    public function oganisationDetails();
    public function createOrganizationDetailsData(array $request);
    public function updateOrganizationDetailsData(array $request, int $id);
}
