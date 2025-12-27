<?php

namespace App\Repository\Eloquent;

use App\Models\User;
use App\Repository\Interface\UserManagementRepositoryInterface;

class UserManagementRepository implements UserManagementRepositoryInterface
{
    public function create(array $request): User
    {
        return User::create($request);
    }

    public function update(int $id, array $request): User
    {
        $updatedUser = User::where('id', $id)->update($request);
        return $updatedUser;
    }

    public function findById(int $id): User
    {
        return User::findOrFail($id);
    }

    public function delete(int $id): User
    {
        return User::where('id', $id)->delete();
    }
}
