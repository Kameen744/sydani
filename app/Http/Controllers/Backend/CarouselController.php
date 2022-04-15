<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Carousel;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class CarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $carousels = Carousel::latest()->get();

        return Inertia::render('Carousel', compact('carousels'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'subTitle' => 'required',
            'image' => 'required'
        ]);

        $image_helper->create(
            title: $data['title'],
            folder: 'carousels',
            sizes: [],
            image: $data['image'],
            delete_image: ''
        );

        Carousel::create([
            'title' => $data['title'],
            'subtitle' => $data['subTitle'],
            'image' => $image_helper->get_image_name($data['title'])
        ]);

        return Redirect::route('carousel');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Carousel $carousel, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'title' => 'required',
            'subTitle' => 'required'
        ]);

        if($request->image) {

            $image_helper->create(
                title: $data['title'],
                folder: 'carousels',
                sizes: [],
                image: $request->image,
                delete_image: $carousel->title);

            $data['image'] = $image_helper->get_image_name(title: $data['title']);
        }

        $carousel->update($data);
        return Redirect::route('carousel');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Carousel $carousel, ImageHelper $image_helper)
    {
        $image_helper->delete(folder: 'carousels', title: $carousel->title);
        $carousel->delete();
        return Redirect::route('carousel');
    }
}
