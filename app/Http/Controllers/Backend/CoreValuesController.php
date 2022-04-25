<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\CoreValues;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class CoreValuesController extends Controller
{
          /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $coreValues = CoreValues::all();
        return Inertia::render('CoreValues', compact('coreValues'));
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
            'value'  => 'required',
        ]);

        CoreValues::create($data);
        return Redirect::route('values');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CoreValues $values)
    {
        $data = $request->validate([
            'value'     => 'required',
        ]);

        $values->update($data);
        return Redirect::route('values');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(CoreValues $values)
    {
        $values->delete();
        return Redirect::route('values');
    }
}
