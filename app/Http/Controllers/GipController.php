<?php

namespace App\Http\Controllers;

use App\Models\Gip\BatchCategory;
use App\Models\Gip\Gallery;
use Inertia\Inertia;
use App\Models\Gip\Intern;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GipController extends Controller
{
    public function index()
    {
        $interns = Intern::latest()->with('profile_image', 'batch')
            ->take(20)->get();

        return Inertia::render('Home', compact('interns'));
    }

    public function gallery()
    {
        $batches = BatchCategory::all()
            ->map(function ($batch) {
                $interns = Intern::where('batch_category_id', $batch->id)
                    ->with('profile_image')
                    ->with('images')
                    ->get();

                $batch['interns'] = $interns;

                return $batch;
            });

        return Inertia::render('GalleryPage', compact('batches'));
    }

    public function forum()
    {
        return Inertia::render('ForumPage');
    }

    public function event()
    {
        return Inertia::render('EventPage');
    }

    // login

    public function login()
    {
        return Inertia::render('InternLogin');
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('intern')->attempt([
            'email'     => $request->email,
            'password'  => $request->password,
            'blocked'   => 0
        ], $request->remember)) {
            $request->session()->regenerate();

            return redirect()->intended('/sgip/dashboard');
        }

        return redirect()->route('intern.login')->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function intern_dashboard()
    {
        // $interns = Intern::latest()->with('profile_image')->get();
        // $batchCategories = BatchCategory::all();

        $id = Auth::guard('intern')->user()->id;
        $intern = Intern::where('id', $id)
            ->with('images')->with('profile_image')
            ->with('batch')
            ->first();

        return Inertia::render('InternDashboard', compact('intern'));
    }

    public function logout(Request $request)
    {
        Auth::guard('intern')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/sgip/login');
    }
}
