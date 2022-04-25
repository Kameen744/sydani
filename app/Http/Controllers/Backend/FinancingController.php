<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Financing;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class FinancingController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $financings = Financing::latest()->get();

        return Inertia::render('Financing', compact('financings'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'required'
        ]);

        $image_helper->create(
            title: $data['title'],
            folder: 'financings',
            sizes: [],
            image: $data['image'],
            delete_image: ''
        );

        Financing::create([
            'title' => $data['title'],
            'content' => $data['content'],
            'image' => $image_helper->get_image_name($data['title'])
        ]);

        return Redirect::route('financing');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Financing $financing, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        if($request->image) {
            $image_helper->create(
                title: $data['title'],
                folder: 'financings',
                sizes: [],
                image: $request->image,
                delete_image: $financing->title);
            $data['image'] = $image_helper->get_image_name(title: $data['title']);
        } elseif (isset($financing->image)) {
            $image_helper->rename(
                folder: 'financings',
                old: $financing->image,
                new: $data['title']);
            $data['image'] = $image_helper->get_image_name(title: $data['title']);
        }

        $financing->update($data);
        return Redirect::route('financing');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Financing $financing, ImageHelper $image_helper)
    {
        $image_helper->delete(folder: 'financings', title: $financing->title);
        $financing->delete();
        return Redirect::route('financing');
    }
}
