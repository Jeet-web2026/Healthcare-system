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
}
