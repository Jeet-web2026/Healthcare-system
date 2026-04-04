<?php

namespace App\Repository\Eloquent;

use App\Models\Banner;
use App\Repository\Interface\HomeServiceRepositoryInterface;
use Illuminate\Support\Facades\Storage;

class HomeRepository implements HomeServiceRepositoryInterface
{
    public function bannerData(): Banner
    {
        return Banner::first();
    }

    public function createHomePageData(array $data): Banner
    {
        return Banner::create($data);
    }

    public function updateHomePageData(int $id, array $data): Banner
    {
        $banner = Banner::findOrFail($id);
        $banner->update($data);
        return $banner;
    }

    public function fetchHomePageDataById(int $id): ?Banner
    {
        return Banner::find($id);
    }

    public function uploadImage($image): string
    {
        $path = $image->store('uploads/home_images', 'public');

        return '/storage/' . $path;
    }

    public function deleteImage($image): bool
    {
        $path = str_replace('/storage/', '', $image);

        return Storage::disk('public')->delete($path);
    }
}
