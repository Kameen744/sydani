<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use App\Models\Insight;
use App\Models\OurTeam;
use App\Models\Partner;
use App\Models\Project;
use App\Models\Carousel;
use App\Models\Industry;
use App\Models\Whoweare;
use App\Models\Financing;
use App\Models\CoreValues;
use Illuminate\Http\Request;
use App\Models\VisionMission;
use App\Models\NewsLetterList;
use App\Models\IndustryService;
use App\Models\SystemStrengthening;
use Illuminate\Support\Facades\Redirect;

class PageController extends Controller
{
    public function __construct() {
        // sleep(2);
    }
    public function welcome()
    {
        $carousel = Carousel::latest()->first();
        $partners = Partner::latest()->get();
        $projects = Project::latest()->take(6)->get();
        $insights = Insight::latest()->take(4)->get();

        return Inertia::render(
            'Welcome',
            compact(
                'carousel',
                'partners',
                'projects',
                'insights'));
    }

    public function about()
    {
        $whoweare = Whoweare::latest()->first();
        $coreValues = CoreValues::all();
        $vision = VisionMission::latest()->first();
        $teams = OurTeam::take(4)->get();
        return Inertia::render('About', \compact('whoweare', 'vision', 'teams', 'coreValues'));
    }

    public function contact()
    {
        $contact = Contact::latest()->first();
        return Inertia::render('Contact', \compact('contact'));
    }

    public function career()
    {
        return Inertia::render('Career');
    }

    public function industries($page)
    {
        $industry = Industry::where('slug', $page)->first();
        $insights = Insight::where('industry_slug', $page)->latest()->take(3)->get();
        $services = IndustryService::where('industry_slug', $page)->take(4)->get();

        return Inertia::render('Industries', \compact('industry', 'page', 'insights', 'services'));
    }

    public function ourwork()
    {
        $financings = Financing::latest()->take(2)->get();
        $systems = SystemStrengthening::latest()->take(4)->get();
        return Inertia::render('OurWork', \compact('financings', 'systems'));
    }

    public function projects()
    {
        return Inertia::render('Project');
    }

    public function newsletter(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email|unique:news_letter_lists,email',
        ]);

        NewsLetterList::create($data);
        return Redirect::route('welcome');
    }
}
