<?php

namespace App\Http\Controllers\Backend\Gip;

use Inertia\Inertia;
use App\Models\Gip\Intern;
use Illuminate\Http\Request;
use App\Models\Gip\BatchCategory;
use App\Http\Controllers\Controller;

class UploadImagesContrller extends Controller
{
    public function index(Request $request)
    {
        $interns = Intern::latest()->with('profile_image')->get();
        $batchCategories = BatchCategory::all();

        return Inertia::render('Gip/Interns', compact('interns', 'batchCategories'));
    }
}
