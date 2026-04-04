<?php

namespace App\Http\Controllers\Pages;

use App\Enums\GlobalMessages;
use App\Http\Controllers\Controller;
use App\Repository\Interface\HomeServiceInterface;
use App\Repository\Interface\OrganisationDetailsManagementServiceInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;

class HomeController extends Controller
{
    use ResponseTrait;

    public function __construct(protected HomeServiceInterface $homeService, protected OrganisationDetailsManagementServiceInterface $organisationDetails) {}

    public function index(): JsonResponse
    {
        $homePageData = $this->homeService->index();
        return $this->successResponse(true, GlobalMessages::DATA_FETCHED->value, $homePageData);
    }

    public function orgDetails(): JsonResponse
    {
        $organisationDetails = $this->organisationDetails->oganisationDetails();
        return $this->successResponse(true, GlobalMessages::DATA_FETCHED->value, $organisationDetails);
    }
}
