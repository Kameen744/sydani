<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\VisionMission;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class VisionMissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $visionmission = VisionMission::latest()->first();
        return Inertia::render('VisionMission', compact('visionmission'));
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
            'vision'    => 'required',
            'mission'   => 'required',
            'image'     => 'required'
        ]);

        $image_helper->create(
            title: $data['vision'],
            folder: 'visionmission',
            sizes: [],
            image: $data['image'],
            delete_image: ''
        );

        VisionMission::create([
            'vision'    => $data['vision'],
            'mission'   => $data['mission'],
            'image'     => $image_helper->get_image_name($data['vision'])
        ]);

        return Redirect::route('visionmission');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VisionMission $visionmission, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'vision'    => 'required',
            'mission'   => 'required',
        ]);

        if($request->image) {
            $image_helper->create(
                title: $data['vision'],
                folder: 'visionmission',
                sizes: [],
                image: $request->image,
                delete_image: $visionmission->vision);
            $data['image'] = $image_helper->get_image_name(title: $data['vision']);

        } elseif (isset($visionmission->image)) {
            $image_helper->rename(
                folder: 'visionmission',
                old: $visionmission->image,
                new: $data['vision']);
            $data['image'] = $image_helper->get_image_name(title: $data['vision']);
        }

        $visionmission->update($data);
        return Redirect::route('visionmission');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(VisionMission $visionmission, ImageHelper $image_helper)
    {
        $image_helper->delete(folder: 'visionmission', title: $visionmission->vision);
        $visionmission->delete();
        return Redirect::route('visionmission');
    }
}
