<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Whoweare;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class WhoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $whoweare = Whoweare::latest()->first();
        return Inertia::render('Whoweare', compact('whoweare'));
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
            'content' => 'required',
            'image' => 'required'
        ]);

        $image_helper->create(
            title: $data['content'],
            folder: 'whoweare',
            sizes: [],
            image: $data['image'],
            delete_image: ''
        );

        Whoweare::create([
            'content' => $data['content'],
            'image' => $image_helper->get_image_name($data['content'])
        ]);

        return Redirect::route('whoweare');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Whoweare $whoweare, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'content' => 'required',
        ]);

        if($request->image) {
            $image_helper->create(
                title: $data['content'],
                folder: 'whoweare',
                sizes: [],
                image: $request->image,
                delete_image: $whoweare->content);
            $data['image'] = $image_helper->get_image_name(title: $data['content']);

        } elseif (isset($whoweare->image)) {
            $image_helper->rename(
                folder: 'whoweare',
                old: $whoweare->image,
                new: $data['content']);
            $data['image'] = $image_helper->get_image_name(title: $data['content']);
        }

        $whoweare->update($data);
        return Redirect::route('whoweare');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Whoweare $whoweare, ImageHelper $image_helper)
    {
        $image_helper->delete(folder: 'whoweare', title: $whoweare->content);
        $whoweare->delete();
        return Redirect::route('whoweare');
    }
}
