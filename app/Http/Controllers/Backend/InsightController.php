<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Insight;
use App\Models\Industry;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class InsightController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $insights = Insight::latest()->paginate(10);
        $industries = Industry::all('name', 'slug');
        return Inertia::render('Insight', compact('insights', 'industries'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, ImageHelper $image_helper,)
    {
        $data = $request->validate([
            'title'         => 'required',
            'content'       => 'required',
            'industry_slug' => 'required',
            'image'         => 'required'
        ]);

        $image_helper->create(
            title: $data['title'],
            folder: 'insights',
            sizes: [],
            image: $data['image'],
            delete_image: ''
        );

        Insight::create([
            'title'         => $data['title'],
            'content'       => $data['content'],
            'slug'          => Str::slug($data['title']),
            'industry_slug' => $data['industry_slug'],
            'image'         => $image_helper->get_image_name($data['title'])
        ]);

        return Redirect::route('insight');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Insight $insight, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'title'         => 'required',
            'content'       => 'required',
            'industry_slug' => 'required',
        ]);

        if($request->image) {

            $image_helper->create(
                title: $data['title'],
                folder: 'insights',
                sizes: [],
                image: $request->image,
                delete_image: $insight->title);
            $data['image'] = $image_helper->get_image_name(title: $data['title']);

        } elseif (isset($insight->image)) {
            $image_helper->rename(
                folder: 'insights',
                old: $insight->image,
                new: $data['title']);
            $data['image'] = $image_helper->get_image_name(title: $data['title']);
        }

        $data['slug'] = Str::slug($data['title']);
        $insight->update($data);
        return Redirect::route('insight');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ImageHelper $image_helper, Insight $insight)
    {
        $image_helper->delete(folder: 'insights', title: $insight->title);
        $insight->delete();
        return Redirect::route('insight');
    }
}
