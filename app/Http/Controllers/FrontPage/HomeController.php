<?php

namespace App\Http\Controllers\FrontPage;

use App\Http\Controllers\Controller;
use App\Mail\AutoResponder;
use App\Mail\ContactUs;
use App\Models\News;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $projects = Project::latest()->take(4)->get();
        $newsItems = News::latest()->take(3)->get();
        return Inertia::render('FrontPages/Home/Index', ['projects' => $projects, 'news_items' => $newsItems])->withViewData(['meta' => 'Welcome to Daniel Homes']);
    }
    public function about()
    {
        return Inertia::render('FrontPages/About/Index')->withViewData(['meta' => 'More About Daniel Homes']);
    }
    public function services()
    {
        return Inertia::render('FrontPages/Services/Index')->withViewData(['meta' => 'Daniel Homes Services']);
    }
    public function residential()
    {
        return Inertia::render('FrontPages/Services/Residential/Index')->withViewData(['meta' => 'Residential Projects']);
    }
    public function commercial()
    {
        return Inertia::render('FrontPages/Services/Commercial/Index')->withViewData(['meta' => 'Commercial Projects']);
    }
    public function advisory()
    {
        return Inertia::render('FrontPages/Services/Facility/Index')->withViewData(['meta' => 'Facility Management']);
    }
    public function investment()
    {
        return Inertia::render('FrontPages/Services/Investment/Index')->withViewData(['meta' => 'Investment']);
    }
    public function contact()
    {
        return Inertia::render('FrontPages/Contact/Index')->withViewData(['meta' => 'Contact Us']);
    }
    public function sendContactMessage(Request $request)
    {
        Mail::to('hello@danielhomesng.com')->cc(['danielimeh@danielhomesng.com'])->send(new ContactUs($request));
        Mail::to($request->email)->send(new AutoResponder());

        if ($request->contact) {
            return redirect('/contact')->with('message', 'Message Sent');
        } else {
            return back()->with('message', 'Message Sent');
        }
    }
    public function community()
    {
        return Inertia::render('FrontPages/Community/Index')->withViewData(['meta' => 'Community']);
    }
}
