<?php

namespace App\Http\Controllers\FrontPage;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function projects()
    {
        $allProjects = Project::orderBy('created_at', 'desc')->get();
        return Inertia::render('FrontPages/Projects/Index', ['all_projects' => $allProjects])->withViewData(['meta' => 'Projects']);
    }
    public function projectDetails($id)
    {
        $project = Project::with('projectImages')->findOrFail($id);

        return Inertia::render('FrontPages/Projects/ProjectDetails', ['project' => $project])->withViewData(['meta' => 'Project Details']);
    }
}
