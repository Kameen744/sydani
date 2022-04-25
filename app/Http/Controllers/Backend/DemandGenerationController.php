<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\DemandGeneration;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class DemandGenerationController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $demandGenerations = DemandGeneration::latest()->get();
        return Inertia::render('DemandGeneration', compact('demandGenerations'));
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

        DemandGeneration::create([
            'title' => $data['title'],
            'content' => $data['content'],
        ]);

        return Redirect::route('demand.generation');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DemandGeneration $demand)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        $demand->update($data);
        return Redirect::route('demand.generation');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(DemandGeneration $demand)
    {
        $demand->delete();
        return Redirect::route('demand.generation');
    }
}
