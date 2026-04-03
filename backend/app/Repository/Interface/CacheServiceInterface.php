<?php

namespace App\Repository\Interface;

use Closure;

interface CacheServiceInterface
{
    public function remember(string $key, $ttl, Closure $callback);

    public function forget(string $key): void;

    public function rememberForever(string $key, Closure $callback);
}
