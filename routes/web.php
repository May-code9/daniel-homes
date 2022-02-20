<?php

use App\Http\Controllers\FrontPage\HomeController;
use App\Http\Controllers\FrontPage\NewsController as PublicNewsController;
use App\Http\Controllers\FrontPage\ProjectsController as PublicProjectsController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ])->withViewData(['meta' => 'Welcome to Daniel Homes']);
});

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/services', [HomeController::class, 'services'])->name('services');
Route::get('/services/residential', [HomeController::class, 'residential'])->name('residential');
Route::get('/services/commercial', [HomeController::class, 'commercial'])->name('commercial');
Route::get('/services/advisory', [HomeController::class, 'advisory'])->name('advisory');
Route::get('/services/investment', [HomeController::class, 'investment'])->name('investment');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::post('/contact/post', [HomeController::class, 'sendContactMessage']);
Route::get('/community', [HomeController::class, 'community'])->name('community');
Route::get('/news', [PublicNewsController::class, 'list'])->name('news');
Route::get('/news/details/{id}', [PublicNewsController::class, 'newsdetails'])->name('newsdetails');
Route::get('/projects', [PublicProjectsController::class, 'projects'])->name('projects');
Route::get('/projects/details/{id}', [PublicProjectsController::class, 'projectDetails'])->name('projectdetails');

//Admin
Route::resource('admin/news', NewsController::class)->middleware(['auth', 'is.admin']);
Route::resource('admin/projects', ProjectsController::class)->middleware(['auth', 'is.admin']);
