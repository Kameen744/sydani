<?php

namespace App\Http\Controllers\Backend\Gip;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Gip\BatchCategory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class InternBatchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $batchCategorys = BatchCategory::latest()->get();
        return Inertia::render('Gip/BatchCategory', compact('batchCategorys'));
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
            'batch' => 'required',
            'start' => 'required',
            'end'   => 'required'
        ]);

        BatchCategory::create($data);

        return Redirect::route('batchCategory');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BatchCategory $batch)
    {
        $data = $request->validate([
            'batch' => 'required',
            'start' => 'required',
            'end'   => 'required'
        ]);

        $batch->update($data);
        return Redirect::route('batchCategory');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(BatchCategory $batch)
    {
        $batch->delete();
        return Redirect::route('batchCategory');
    }
}
