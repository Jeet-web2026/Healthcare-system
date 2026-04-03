<?php

namespace App\Http\Controllers\Home;

use App\Enums\GlobalMessages;
use App\Http\Controllers\Controller;
use App\Repository\Interface\HomeServiceInterface;
use App\Traits\ResponseTrait;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    use ResponseTrait;

    public function __construct(protected HomeServiceInterface $homeService) {}

    public function index(): JsonResponse
    {
        try {
            $homePageData = $this->homeService->index();
            return $this->successResponse(true, GlobalMessages::DATA_FETCHED->value, $homePageData);
        } catch (Exception $th) {
            Log::error('Error in HomeController@index: ' . $th->getMessage());
            return $this->errorResponse(false, GlobalMessages::SOMETHING_WENT_WRONG->value, null);
        }
    }
}
