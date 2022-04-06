<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function welcome()
    {
        // $data = [
        //     'canLogin' => Route::has('login'),
        //     'canRegister' => Route::has('register'),
        //     'laravelVersion' => Application::VERSION,
        //     'phpVersion' => PHP_VERSION,
        // ];

        return Inertia::render('Welcome');
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function industries($page)
    {
        return Inertia::render('Industries', ['page' => $page]);
    }

    public function ourwork()
    {
        return Inertia::render('OurWork');
    }

    public function projects()
    {
        return Inertia::render('Project');
    }
}
