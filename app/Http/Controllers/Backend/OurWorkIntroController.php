<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\OurWorkIntro;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class OurWorkIntroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $intros = OurWorkIntro::latest()->get();
        return Inertia::render('OurWorkIntro', compact('intros'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'financing_intro'           => 'required',
            'sytem_strengthening_intro' => 'required',
            'demand_generation_intro'   => 'required',
            'data_analytics_intro'      => 'required'
        ]);

        OurWorkIntro::create($data);

        return Redirect::route('ourwork.intro');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OurWorkIntro $intro)
    {
        $data = $request->validate([
            'financing_intro'           => 'required',
            'sytem_strengthening_intro' => 'required',
            'demand_generation_intro'   => 'required',
            'data_analytics_intro'      => 'required'
        ]);

        $intro->update($data);
        return Redirect::route('ourwork.intro');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(OurWorkIntro $intro)
    {
        $intro->delete();
        return Redirect::route('ourwork.intro');
    }
}
