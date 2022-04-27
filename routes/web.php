<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PageController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Backend\WhoController;
use App\Http\Controllers\Backend\BlogController;
use App\Http\Controllers\Backend\TeamController;
use App\Http\Controllers\Backend\ContactController;
use App\Http\Controllers\Backend\InsightController;
use App\Http\Controllers\Backend\PartnerController;
use App\Http\Controllers\Backend\ProjectController;
use App\Http\Controllers\Backend\VacancyController;
use App\Http\Controllers\Backend\CarouselController;
use App\Http\Controllers\Backend\IndustryController;
use App\Http\Controllers\Backend\FinancingController;
use App\Http\Controllers\Backend\CoreValuesController;
use App\Http\Controllers\Backend\OurWorkIntroController;
use App\Http\Controllers\Backend\DataAnalyticsController;
use App\Http\Controllers\Backend\VisionMissionController;
use App\Http\Controllers\Backend\DemandGenerationController;
use App\Http\Controllers\Backend\SystemStrengtheningController;


Route::get('/', [PageController::class, 'welcome'])->name('welcome');
Route::get('/about', [PageController::class, 'about']);
Route::get('/about/team-member/{name}', [PageController::class, 'view_team_member']);
Route::get('/contact', [PageController::class, 'contact']);
Route::get('/career', [PageController::class, 'career']);
Route::get('/industries/{name}', [PageController::class, 'industries']);
Route::get('/ourwork',  [PageController::class, 'ourwork']);
Route::get('/projects', [PageController::class, 'projects']);
Route::get('/blog', [PageController::class, 'blog_index']);
Route::get('/blog/read/{slug}', [PageController::class, 'blog_view']);
Route::get('/blog/category/{slug}', [PageController::class, 'blog_category']);
Route::post('newsletter/subscribe', [PageController::class, 'newsletter']);

Route::middleware(['auth'])->group(function () {

    Route::prefix('admin')->group(function () {
        // Dashboard index
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
            Route::post('/project/store', 'store');
            Route::patch('/project/update/{project}', 'update');
            Route::delete('/project/delete/{project}', 'destroy');
            // Project page intro
            Route::get('/project/intro', 'intro')->name('project.intro');
            Route::post('/project/intro/store', 'intro_store');
            Route::patch('/project/intro/update/{intro}', 'intro_update');
            Route::delete('/project/intro/delete/{intro}', 'intro_delete');
        });

        // Insight Routes
        Route::controller(InsightController::class)->group(function() {
            Route::get('/insight', 'index')->name('insight');
            Route::post('/insight/store', 'store');
            Route::patch('/insight/update/{insight}', 'update');
            Route::delete('/insight/delete/{insight}', 'destroy');
        });

        // Partners Routes
        Route::controller(PartnerController::class)->group(function() {
            Route::get('/partner', 'index')->name('partner');
            Route::post('/partner/store', 'store');
            Route::patch('/partner/update/{partner}', 'update');
            Route::delete('/partner/delete/{partner}', 'destroy');
        });

        // Who we Are Routes
        Route::controller(WhoController::class)->group(function() {
            Route::get('/whoweare', 'index')->name('whoweare');
            Route::post('/whoweare/store', 'store');
            Route::patch('/whoweare/update/{whoweare}', 'update');
            Route::delete('/whoweare/delete/{whoweare}', 'destroy');
        });

        // Vision & Mission Routes
        Route::controller(VisionMissionController::class)->group(function() {
            Route::get('/visionmission', 'index')->name('visionmission');
            Route::post('/visionmission/store', 'store');
            Route::patch('/visionmission/update/{visionmission}', 'update');
            Route::delete('/visionmission/delete/{visionmission}', 'destroy');
        });

        // Core values Routes
        Route::controller(CoreValuesController::class)->group(function() {
            Route::get('/values', 'index')->name('values');
            Route::post('/values/store', 'store');
            Route::patch('/values/update/{values}', 'update');
            Route::delete('/values/delete/{values}', 'destroy');
        });

        // Our Team Routes
        Route::controller(TeamController::class)->group(function() {
            Route::get('/team', 'index')->name('team');
            Route::post('/team/store', 'store');
            Route::patch('/team/update/{team}', 'update');
            Route::delete('/team/delete/{team}', 'destroy');
        });

        // Industries Routes
        Route::controller(IndustryController::class)->group(function() {
            Route::get('/industry', 'index')->name('industry');
            Route::post('/industry/store', 'store');
            Route::patch('/industry/update/{industry}', 'update');
            Route::delete('/industry/delete/{industry}', 'destroy');
            // industry Servicess routes
            Route::get('/industry/services', 'services')->name('industry.services');
            Route::post('/industry/services/store', 'store_service');
            Route::patch('/industry/services/update/{service}', 'update_service');
            Route::delete('/industry/services/delete/{service}', 'delete_service');
        });

        // Our Work Routes
        // Financing
        Route::controller(FinancingController::class)->group(function() {
            Route::get('/financing', 'index')->name('financing');
            Route::post('/financing/store', 'store');
            Route::patch('/financing/update/{financing}', 'update');
            Route::delete('/financing/delete/{financing}', 'destroy');
        });

        // System Strengthening
        Route::controller(SystemStrengtheningController::class)->group(function() {
            Route::get('/system', 'index')->name('systemStrength');
            Route::post('/system/store', 'store');
            Route::patch('/system/update/{system}', 'update');
            Route::delete('/system/delete/{system}', 'destroy');
        });

        // Demand Generation
        Route::controller(DemandGenerationController::class)->group(function() {
            Route::get('/demand', 'index')->name('demand.generation');
            Route::post('/demand/store', 'store');
            Route::patch('/demand/update/{demand}', 'update');
            Route::delete('/demand/delete/{demand}', 'destroy');
        });

        // Data Analytics
        Route::controller(DataAnalyticsController::class)->group(function() {
            Route::get('/data-analytics', 'index')->name('data.analytics');
            Route::post('/data-analytics/store', 'store');
            Route::patch('/data-analytics/update/{analytic}', 'update');
            Route::delete('/data-analytics/delete/{analytic}', 'destroy');
        });

        // Our work intros routes
        Route::controller(OurWorkIntroController::class)->group(function() {
            Route::get('/ourwork/intro', 'index')->name('ourwork.intro');
            Route::post('/ourwork/intro/store', 'store');
            Route::patch('/ourwork/intro/update/{intro}', 'update');
            Route::delete('/ourwork/intro/delete/{intro}', 'destroy');
        });

        // vacancy routes
        Route::controller(VacancyController::class)->group(function() {
            Route::get('/vacancy', 'index')->name('vacancy');
            Route::post('/vacancy/store', 'store');
            Route::patch('/vacancy/update/{vacancy}', 'update');
            Route::delete('/vacancy/delete/{vacancy}', 'destroy');
        });

        // Contact us Routes
        Route::controller(ContactController::class)->group(function() {
            Route::get('/contact', 'index')->name('contact');
            Route::post('/contact/store', 'store');
            Route::patch('/contact/update/{contact}', 'update');
            Route::delete('/contact/delete/{contact}', 'destroy');
        });

        // Blog-Admin Routes
        Route::controller(BlogController::class)->group(function() {
            Route::get('/blog', 'index')->name('blog');
            Route::post('/blog/store', 'store');
            Route::patch('/blog/update/{blog}', 'update');
            Route::delete('/blog/delete/{blog}', 'destroy');
        });
    });
});

require __DIR__.'/auth.php';
