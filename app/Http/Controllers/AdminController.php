<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Index');
    }


    public function fake_image_upload(Request $request) {
        dd($request->image);
    }
}
