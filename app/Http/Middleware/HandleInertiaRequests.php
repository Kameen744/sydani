<?php

namespace App\Http\Middleware;

use App\Models\Contact;
use Inertia\Middleware;
use App\Models\Industry;
use Illuminate\Http\Request;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        $asset = \asset('sydani');
        $public = asset('/');
        $dashAsset = asset('dashboard');
        $industries = Industry::all('name', 'slug');
        $contact = Contact::latest()->first();

        $auth = [
            'user' => $request->user(),
        ];
        return array_merge(parent::share($request), [
            ...compact('asset', 'auth', 'dashAsset', 'industries', 'contact', 'public')
        ]);
    }
}
