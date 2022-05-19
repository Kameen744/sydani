<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ManagePermission;


class UserController extends Controller
{
    public $permissions;

    public function __construct(ManagePermission $manage_permissions) {
        $this->permissions = $manage_permissions;
    }

    public function index(Request $request)
    {
        if(!$this->permissions->checkPermission('view-users')) {
            return Redirect::back()->withErrors(['permission_error' => 'Access denied']);
        }

        $users = User::all();
        return Inertia::render('Users', compact('users'));
    }
}
