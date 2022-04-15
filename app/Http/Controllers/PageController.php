<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Carousel;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function __construct() {
        sleep(2);
    }
    public function welcome()
    {
        // $data = [
        //     'canLogin' => Route::has('login'),
        //     'canRegister' => Route::has('register'),
        //     'laravelVersion' => Application::VERSION,
        //     'phpVersion' => PHP_VERSION,
        // ];
        $carousel = Carousel::latest()->first();

        return Inertia::render('Welcome', compact('carousel'));
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function career()
    {
        return Inertia::render('Career');
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
