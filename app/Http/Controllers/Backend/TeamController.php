<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\OurTeam;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $teams = OurTeam::all();

        return Inertia::render('Team', compact('teams'));
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
            'name'      => 'required',
            'bio'       => 'required',
            'position'  => 'required',
            'image'     => 'required'
        ]);

        $image_helper->create(
            title: $data['name'],
            folder: 'teams',
            sizes: [],
            image: $data['image'],
            delete_image: ''
        );

        OurTeam::create([
            'name'      => $data['name'],
            'bio'       => $data['bio'],
            'position'  => $data['position'],
            'linkedin'  => $request->linkedin,
            'instagram' => $request->instagram,
            'facebook'  => $request->facebook,
            'twitter'   => $request->twitter,
            'image'     => $image_helper->get_image_name($data['name'])
        ]);

        return Redirect::route('team');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OurTeam $team, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'name'      => 'required',
            'bio'       => 'required',
            'position'  => 'required',
        ]);

        if($request->image) {
            $image_helper->create(
                title: $data['name'],
                folder: 'teams',
                sizes: [],
                image: $request->image,
                delete_image: $team->name);
            $data['image'] = $image_helper->get_image_name(title: $data['name']);

        } elseif (isset($team->image)) {
            $image_helper->rename(
                folder: 'teams',
                old: $team->image,
                new: $data['name']);
            $data['image'] = $image_helper->get_image_name(title: $data['name']);
        }

        $data['linkedin']  = $request->linkedin;
        $data['instagram'] = $request->instagram;
        $data['facebook']  = $request->facebook;
        $data['twitter']   = $request->twitter;

        $team->update($data);
        return Redirect::route('team');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(OurTeam $team, ImageHelper $image_helper)
    {
        $image_helper->delete(folder: 'teams', title: $team->name);
        $team->delete();
        return Redirect::route('team');
    }
}
