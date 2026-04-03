<?php

namespace App\Services;

use App\Repository\Interface\CacheServiceInterface;
use Closure;
use Illuminate\Support\Facades\Cache;

class CacheService implements CacheServiceInterface
{
    public function remember(string $key, $ttl, Closure $callback)
    {
        return Cache::remember($key, $ttl, $callback);
    }

    public function forget(string $key): void
    {
        Cache::forget($key);
    }

    public function rememberForever(string $key, Closure $callback)
    {
        return Cache::rememberForever($key, $callback);
    }
}
