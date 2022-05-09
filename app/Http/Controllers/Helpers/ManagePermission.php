<?php

namespace App\Http\Controllers\Helper;

use App\Models\UserPermission;
use Illuminate\Support\Facades\Auth;

class ManagePermission
{
    public function checkPermission($name)
    {
        return Auth::user()->permissions()->contains($name);
    }

    public function addPermission($user_id, $permission_id)
    {
        $perm = $this->getUserPermission($user_id, $permission_id);

        if(!$perm) {
            UserPermission::create(['user_id' => $user_id, 'permission_id' => $permission_id]);
        }
    }

    public function removePermission($user_id, $permission_id)
    {
        $perm = $this->getUserPermission($user_id, $permission_id);
    }

    public function getUserPermission($user_id, $permission_id)
    {
        return UserPermission::where('user_id', $user_id)
            ->where('permission_id', $permission_id)->first();
    }
}
