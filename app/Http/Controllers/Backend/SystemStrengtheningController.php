<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SystemStrengthening;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class SystemStrengtheningController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $systemStrengths = SystemStrengthening::latest()->get();
        return Inertia::render('SystemStrength', compact('systemStrengths'));
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

        SystemStrengthening::create([
            'title' => $data['title'],
            'content' => $data['content'],
        ]);

        return Redirect::route('systemStrength');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SystemStrengthening $system)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        $system->update($data);
        return Redirect::route('systemStrength');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(SystemStrengthening $system)
    {
        $system->delete();
        return Redirect::route('systemStrength');
    }
}
