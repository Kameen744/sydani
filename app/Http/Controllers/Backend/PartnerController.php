<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Partner;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class PartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $partners = Partner::latest()->get();
        return Inertia::render('Partner', compact('partners'));
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
            'name' => 'required',
            'image' => 'required'
        ]);

        $image_helper->create(
            title: $data['name'],
            folder: 'partners',
            sizes: [],
            image: $data['image'],
            delete_image: ''
        );

        Partner::create([
            'name' => $data['name'],
            'image' => $image_helper->get_image_name($data['name'])
        ]);

        return Redirect::route('partner');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ImageHelper $image_helper, Partner $partner)
    {
        $data = $request->validate([
            'name' => 'required'
        ]);

        if($request->image) {

            $image_helper->create(
                title: $data['name'],
                folder: 'partners',
                sizes: [],
                image: $request->image,
                delete_image: $partner->name);
            $data['image'] = $image_helper->get_image_name(title: $data['name']);

        } elseif (isset($partner->image)) {
            $image_helper->rename(
                folder: 'partners',
                old: $partner->image,
                new: $data['name']);
            $data['image'] = $image_helper->get_image_name(title: $data['name']);
        }

        $partner->update($data);
        return Redirect::route('partner');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Partner $partner, ImageHelper $image_helper)
    {
        $image_helper->delete(folder: 'partners', title: $partner->name);
        $partner->delete();
        return Redirect::route('partner');
    }
}
