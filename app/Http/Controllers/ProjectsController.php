<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('BackPages/Projects/Add')->withViewData(['meta' => 'Create Project']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $file = $request->file('image');
        $name = time() . '_' . md5($request->title) . '.' . $file->getClientOriginalExtension();
        $destinationPath = public_path('/img/projects');
        $file->move($destinationPath, $name);

        $project = Project::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'details' => $request->details,
            'type' => $request->type,
            'location' => $request->location,
            'map' => $request->map,
            'img' => $name
        ]);

        if ($request->image2 != null) {
            $lengthOfImage2 = count($request->image2);
            for ($i = 0; $i < $lengthOfImage2; $i++) {
                $otherFiles = $request->image2[$i];
                $image_file = time() . '_' . md5($request->title) . $i . '.' . $otherFiles->getClientOriginalExtension();
                $imagePath = public_path('/img/projects');
                $otherFiles->move($imagePath, $image_file);

                $image_name = $request->image_name[$i];

                $project->projectImages()->create([
                    'img' => $image_file,
                    'type' => $image_name
                ]);
            }
        }

        return redirect('/projects')->withFlash('Project added successfully');
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
        $project = Project::with('projectImages')->findOrFail($id);
        return Inertia::render('BackPages/Projects/Edit', ['project' => $project])->withViewData(['meta' => 'Edit Project']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $file = $request->file('image');
        $project = Project::findOrFail($id);
        $name = $project->img;
        if ($file !== null) {
            $destinationPath = public_path('/img/projects');
            $file->move($destinationPath, $name);
        }

        Project::where('id', $id)->update([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'details' => $request->details,
            'type' => $request->type,
            'location' => $request->location,
            'map' => $request->map,
            'img' => $name
        ]);

        return redirect('/projects/details/' . $id)->withFlash('Project updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        ProjectImage::where('project_id', $id)->delete();
        Project::findOrFail($id)->delete();
        return redirect('/projects')->withFlash('Project Deleted');
    }
}
