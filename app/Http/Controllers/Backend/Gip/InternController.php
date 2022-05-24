<?php

namespace App\Http\Controllers\Backend\Gip;

use Inertia\Inertia;
use App\Models\Gip\Intern;
use App\Mail\NewInternMail;
use App\Models\Gip\Gallery;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Gip\BatchCategory;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class InternController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $interns = Intern::latest()->with('profile_image')->get();
        $batchCategories = BatchCategory::all();

        return Inertia::render('Gip/Interns', compact('interns', 'batchCategories'));
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
            'name'              => 'required',
            'email'             => 'required',
            'batch_category_id' => 'required',
            'image'             => 'required'
        ]);

        $img_name = $this::join_name($data['name'], $data['email'], $data['batch_category_id']);
        $password = substr(Str::slug($data['name']), 0, 3) . '_' . rand(1000, 9999);

        // transaction to add new intern, save profile image, and send email
        DB::transaction(function () use ($data, $password, $image_helper, $img_name) {
            $intern = Intern::create([
                'name'              => $data['name'],
                'email'             => $data['email'],
                'batch_category_id' => $data['batch_category_id'],
                'password'          => Hash::make($password)
            ]);

            $image_helper->create(
                title: $img_name,
                folder: 'interns',
                sizes: [],
                image: $data['image'],
                delete_image: ''
            );

            Gallery::create([
                'image' => $image_helper->get_image_name($img_name),
                'intern_id' => $intern->id,
                'profile_image' => true
            ]);

            // Mail::to($intern)->send(new NewInternMail($intern, $password));
        });

        //  Add image on the gallery
        return Redirect::route('interns');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Intern $intern, ImageHelper $image_helper)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'batch_category_id' => 'required'
        ]);

        $img_name = $this::join_name($data['name'], $data['email'], $data['batch_category_id']);

        if ($request->image) {
            $image_helper->create(
                title: $img_name,
                folder: 'interns',
                sizes: [],
                image: $request->image,
                delete_image: $intern->profile_image()->first()->image
            );
            $data['image'] = $image_helper->get_image_name(title: $img_name);
        } elseif (isset($intern->profile_image()->first()->image)) {
            $image_helper->rename(
                folder: 'interns',
                old: $intern->profile_image()->first()->image,
                new: $data['email']
            );

            $data['image'] = $image_helper->get_image_name(title: $img_name);
        }

        $intern->update([
            'name'              => $data['name'],
            'email'             => $data['email'],
            'batch_category_id' => $data['batch_category_id']
        ]);

        $intern->profile_image()->update(['image' => $data['image']]);

        return Redirect::route('interns');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Intern $intern, ImageHelper $image_helper)
    {
        DB::transaction(function () use ($intern, $image_helper) {
            $intern->delete();

            foreach ($intern->images() as $image) {
                $image_helper->delete(folder: 'interns', title: $image->image);
            }
        });

        return Redirect::route('interns');
    }

    public function block(Intern $intern)
    {
    }

    private static function join_name($name, $email, $category)
    {
        return Str::slug($name) . '_' . substr($email, 0, 4) . '_' . $category;
    }
}
