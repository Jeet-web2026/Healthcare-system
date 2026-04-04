<?php

namespace App\Repository\Interface;

use App\Models\Banner;

interface HomeServiceRepositoryInterface
{
    public function bannerData(): Banner;
    public function createHomePageData(array $data): Banner;
    public function updateHomePageData(int $id, array $data): Banner;
    public function uploadImage($image): string;
    public function deleteImage($image): bool;
    public function fetchHomePageDataById(int $id): ?Banner;
}
