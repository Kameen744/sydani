<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Backend\ProjectController;
use App\Http\Controllers\Backend\CarouselController;


Route::get('/', [PageController::class, 'welcome']);
Route::get('/about', [PageController::class, 'about']);
Route::get('/contact', [PageController::class, 'contact']);
Route::get('/career', [PageController::class, 'career']);
Route::get('/industries/{name}', [PageController::class, 'industries']);
Route::get('/ourwork',  [PageController::class, 'ourwork']);
Route::get('/projects', [PageController::class, 'projects']);
Route::get('/blog', [BlogController::class, 'index']);

Route::middleware(['auth'])->group(function () {

    Route::prefix('admin')->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard']);

        // Carousel routes
        Route::controller(CarouselController::class)->group(function() {
            Route::get('/carousel', 'index')->name('carousel');
            Route::post('/carousel/store', 'store');
            Route::patch('/carousel/update/{carousel}', 'update');
            Route::delete('/carousel/delete/{carousel}', 'destroy');
        });

        // Projects routes
        Route::controller(ProjectController::class)->group(function() {
            Route::get('/project', 'index')->name('project');
            Route::get('/project/list', 'project_list')->name('project.list');
        });
    });

});

require __DIR__.'/auth.php';
