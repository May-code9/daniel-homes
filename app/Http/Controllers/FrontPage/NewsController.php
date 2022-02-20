<?php

namespace App\Http\Controllers\FrontPage;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function list()
    {
        $allNews = News::orderBy('created_at', 'desc')->get();
        return Inertia::render('FrontPages/News/Index', ['all_news' => $allNews])->withViewData(['meta' => 'News']);
    }
    public function newsdetails($id)
    {
        $news = News::findOrFail($id);
        return Inertia::render('FrontPages/News/NewsDetails', ['news' => $news])->withViewData(['meta' => $news->title]);
    }
}
