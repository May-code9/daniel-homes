<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NewsController extends Controller
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
        return Inertia::render('BackPages/News/Add')->withViewData(['meta' => 'Create News']);
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
        $destinationPath = public_path('/img/news');
        $file->move($destinationPath, $name);

        News::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'content' => $request->content,
            'image' => $name
        ]);

        return redirect('/news')->withFlash('News added successfully');
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
        $news = News::findOrFail($id);
        return Inertia::render('BackPages/News/Edit', ['news' => $news])->withViewData(['meta' => 'Edit News']);
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
        $news = News::findOrFail($id);
        $name = $news->image;
        if ($file !== null) {
            $destinationPath = public_path('/img/news');
            $file->move($destinationPath, $name);
        }

        News::where('id', $id)->update([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'content' => $request->content,
            'image' => $name
        ]);

        return redirect('/news/details/' . $id)->withFlash('News updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        News::findOrFail($id)->delete();
        return redirect('/admin/news/create')->withFlash('News Deleted');
    }
}
