<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\DataAnalytics;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class DataAnalyticsController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $dataAnalytics = DataAnalytics::latest()->get();
        return Inertia::render('DataAnalytics', compact('dataAnalytics'));
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
            'title' => 'required',
            'content' => 'required'
        ]);

        DataAnalytics::create([
            'title' => $data['title'],
            'content' => $data['content'],
        ]);

        return Redirect::route('data.analytics');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DataAnalytics $analytic)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        $analytic->update($data);
        return Redirect::route('data.analytics');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(DataAnalytics $analytic)
    {
        $analytic->delete();
        return Redirect::route('data.analytics');
    }
}
