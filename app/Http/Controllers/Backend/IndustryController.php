<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Industry;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\IndustryService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class IndustryController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $industries = Industry::all();
        return Inertia::render('Industry', compact('industries'));
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
            'name'  => 'required',
            'intro' => 'required',
        ]);

        $images = [$request->image, $request->service_image];

        foreach ($images as $key => $image) {

            if($image) {

                if($key == 1) {
                    $img_name = $data['name'] .' service';
                    $img_tag = 'service_image';
                } else {
                    $img_name = $data['name'] .' main';
                    $img_tag = 'image';
                }

                $image_helper->create(
                    title: $img_name,
                    folder: 'industries',
                    sizes: [],
                    image: $image,
                    delete_image: ''
                );

                $data[$img_tag] = $image_helper->get_image_name($img_name);
            }
        }

        $data['slug'] = Str::slug($data['name']);
        Industry::create($data);
        return Redirect::route('industry');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Industry $industry, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'name'     => 'required',
            'intro'    => 'required'
        ]);

        $images = [$request->image, $request->service_image];

        foreach ($images as $key => $image) {

            if($image) {

                if($key == 1) {
                    $img_name = $data['name'] .' service';
                    $img_tag = 'service_image';
                } else {
                    $img_name = $data['name'] .' main';
                    $img_tag = 'image';
                }

                $image_helper->create(
                    title: $img_name,
                    folder: 'industries',
                    sizes: [],
                    image: $image,
                    delete_image: $industry->name);
                $data[$img_tag] = $image_helper->get_image_name(title: $img_name);
            } elseif (isset($industry->image)) {
                $image_helper->rename(
                    folder: 'industries',
                    old: $industry->image,
                    new: $img_name);
                $data[$img_tag] = $image_helper->get_image_name(title: $img_name);
            }
        }

        $data['slug'] = Str::slug($data['name']);
        $industry->update($data);
        return Redirect::route('industry');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Industry $industry, ImageHelper $image_helper)
    {
        $image_helper->delete(folder: 'industries', title: $industry->name);
        $industry->delete();
        return Redirect::route('industry');
    }

    // Handle Industry services requests

    public function services()
    {
        $services = IndustryService::all();
        $industries = Industry::all('name', 'slug');
        return Inertia::render('IndustryService', compact('services', 'industries'));
    }

    public function store_service(Request $request)
    {
        $data = $request->validate([
            'title'         => 'required',
            'content'       => 'required',
            'industry_slug' => 'required'
        ]);

        IndustryService::create($data);
        return Redirect::route('industry.services');
    }

    public function update_service(Request $request, IndustryService $service)
    {
        $data = $request->validate([
            'title'         => 'required',
            'content'       => 'required',
            'industry_slug' => 'required'
        ]);

        $service->update($data);
        return Redirect::route('industry.services');
    }

    public function delete_service(IndustryService $service)
    {
        $service->delete();
        return Redirect::route('industry.services');
    }

}
