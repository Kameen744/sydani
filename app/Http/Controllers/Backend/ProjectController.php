<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Support\Str;
use App\Models\ProjectIntro;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Helpers\ImageHelper;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Project');
    }

    public function project_list()
    {
        $projects = Project::latest()->paginate(10);
        return Inertia::render('ProjectList', compact('projects'));
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
            'background'    => 'required',
            'content'       => 'required'
        ]);

        if($request->image) {
            $image_helper->create(
                title: $data['title'],
                folder: 'projects',
                sizes: [],
                image: $request['image'],
                delete_image: ''
            );
        }

        Project::create([
            'title'      => $data['title'],
            'background' => $data['background'],
            'content'    => $data['content'],
            'slug'       => Str::slug($data['title']),
            'image'      => isset($request->image) ? $image_helper->get_image_name(title: $data['title']) : NULL
        ]);

        return Redirect::route('project');
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ImageHelper $image_helper, Project $project)
    {
        $data = $request->validate([
            'title'         => 'required',
            'background'    => 'required',
            'content'       => 'required'
        ]);

        if($request->image) {
            $image_helper->create(
                title: $data['title'],
                folder: 'projects',
                sizes: [],
                image: $request->image,
                delete_image: $project->title);
            $data['image'] = $image_helper->get_image_name(title: $data['title']);
        } elseif (isset($project->image)) {
            $image_helper->rename(
                folder: 'projects',
                old: $project->image,
                new: $data['title']);
            $data['image'] = $image_helper->get_image_name(title: $data['title']);
        }

        $data['slug'] = Str::slug($data['title']);
        $project->update($data);
        return Redirect::route('project.list');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project, ImageHelper $image_helper)
    {
        $image_helper->delete(folder: 'projects', title: $project->title);
        $project->delete();
        return Redirect::route('project.list');
    }

    // Intro
    public function intro()
    {
        $intro = ProjectIntro::latest()->first();
        return Inertia::render('ProjectIntro', compact('intro'));
    }

    public function intro_store(Request $request)
    {
        $data = $request->validate([
            'intro' => 'required'
        ]);

        ProjectIntro::create($data);
        return Redirect::route('project.intro');
    }

    public function intro_update(Request $request, ProjectIntro $intro)
    {
        $data = $request->validate([
            'intro' => 'required'
        ]);

        $intro->update($data);
        return Redirect::route('project.intro');
    }

    public function intro_delete(ProjectIntro $intro)
    {
        $intro->delete();
        return Redirect::route('project.intro');
    }
}
