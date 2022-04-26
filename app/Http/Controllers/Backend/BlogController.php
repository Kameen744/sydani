<?php

namespace App\Http\Controllers\Backend;

use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $blogs = Blog::latest()->get();

        return Inertia::render('Blog', compact('blogs'));
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
            'title'         => 'required',
            'industry_slug' => 'required',
            'content'       => 'required',
            'image'         => 'required'
        ]);

        $image_helper->create(
            title: $data['title'],
            folder: 'blogs',
            sizes: [],
            image: $data['image'],
            delete_image: ''
        );

        $data['slug' ]    = Str::slug($data['title']);
        $data['image']    = $image_helper->get_image_name($data['title']);

        Blog::create($data);
        return Redirect::route('blog');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'title'         => 'required',
            'content'       => 'required',
            'industry_slug' => 'required',
        ]);

        if($request->image) {
            $image_helper->create(
                title: $data['title'],
                folder: 'blogs',
                sizes: [],
                image: $request->image,
                delete_image: $blog->title);
            $data['image'] = $image_helper->get_image_name(title: $data['title']);
        } elseif (isset($blog->image)) {
            $image_helper->rename(
                folder: 'blogs',
                old: $blog->image,
                new: $data['title']);
            $data['image'] = $image_helper->get_image_name(title: $data['title']);
        }

        $data['slug'] = Str::slug($request->title);

        $blog->update($data);
        return Redirect::route('blog');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog, ImageHelper $image_helper)
    {
        $image_helper->delete(folder: 'blogs', title: $blog->title);
        $blog->delete();
        return Redirect::route('blog');
    }
}
