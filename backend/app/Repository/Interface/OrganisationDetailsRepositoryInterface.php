<?php

namespace App\Repository\Interface;

use App\Models\OrgDetails;

interface OrganisationDetailsRepositoryInterface
{
    public function getOrganisationDetails(): OrgDetails;
}
