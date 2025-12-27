<?php

namespace App\Repository\Interface;

use App\Models\User;

interface UserManagementRepositoryInterface
{
    public function create(array $request): User;
    public function update(int $id, array $request): User;
    public function findById(int $id): User;
    public function delete(int $id): User;
}
