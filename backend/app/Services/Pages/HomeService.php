<?php

namespace App\Services\Pages;

use App\Enums\GlobalCachingEnum;
use App\Http\Resources\HomepageresponseResource;
use App\Repository\Interface\CacheServiceInterface;
use App\Repository\Interface\HomeServiceInterface;
use App\Repository\Interface\HomeServiceRepositoryInterface;
use Exception;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

class HomeService implements HomeServiceInterface
{
    public function __construct(
        protected HomeServiceRepositoryInterface $homeRepository,
        protected CacheServiceInterface $cacheService
    ) {}

    public function index()
    {
        return $this->cacheService->rememberForever(
            GlobalCachingEnum::HOME_BANNER->value,
            function () {
                $bannerData = $this->homeRepository->bannerData();

                return new HomepageresponseResource($bannerData);
            }
        );
    }

    public function createHomePageData(array $data)
    {
        $path = $this->homeRepository->uploadImage($data['image']);
        $data['image_url'] = $path;

        try {
            $result = DB::transaction(function () use ($data) {
                return $this->homeRepository->createHomePageData($data);
            });

            $this->cacheService->forget(GlobalCachingEnum::HOME_BANNER->value);

            return $result;
        } catch (Exception $e) {
            $this->homeRepository->deleteImage($path);
            throw $e;
        }
    }

    public function updateHomePageData(int $id, array $data)
    {
        $existingData = $this->homeRepository->fetchHomePageDataById($id);

        if (!$existingData) {
            throw new NotFoundResourceException('Home page data not found.');
        }

        $oldImage = $existingData->image_url ?? null;
        $newImagePath = null;

        try {
            if (isset($data['image'])) {
                $newImagePath = $this->homeRepository->uploadImage($data['image']);
                $data['image_url'] = $newImagePath;
            }

            $result = DB::transaction(function () use ($id, $data) {
                return $this->homeRepository->updateHomePageData($id, $data);
            });

            if ($newImagePath && $oldImage) {
                $this->homeRepository->deleteImage($oldImage);
            }

            $this->cacheService->forget(GlobalCachingEnum::HOME_BANNER->value);

            return $result;
        } catch (Exception $e) {
            if ($newImagePath) {
                $this->homeRepository->deleteImage($newImagePath);
            }

            throw $e;
        }
    }
}
