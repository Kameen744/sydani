<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Inertia\Inertia;
use App\Models\Contact;
use App\Models\Insight;
use App\Models\OurTeam;
use App\Models\Partner;
use App\Models\Project;
use App\Models\Vacancy;
use App\Models\Carousel;
use App\Models\Industry;
use App\Models\Whoweare;
use App\Models\Financing;
use App\Models\CoreValues;
use App\Models\OurWorkIntro;
use Illuminate\Http\Request;
use App\Models\DataAnalytics;
use App\Models\VisionMission;
use App\Models\NewsLetterList;
use App\Models\IndustryService;
use App\Models\ContactUsMessage;
use App\Models\DemandGeneration;
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

    public function gallery()
    {
        $teams = OurTeam::take(3)->get();
        return Inertia::render('Gallery',  \compact('teams'));
    }

    public function view_team_member($name)
    {
        $member = OurTeam::where('name', $name)->first();
        return Inertia::render('ViewTeamMember', \compact('member'));
    }

    public function contact()
    {
        $contact = Contact::latest()->first();
        return Inertia::render('Contact', \compact('contact'));
    }

    public function contact_store(Request $request)
    {
        $message = $request->validate([
            'name'      => 'required|string',
            'email'     => 'required|email',
            'subject'   => 'required|string',
            'message'   => 'required|string'
        ]);

        ContactUsMessage::create($message);
        return Redirect::route('contactus');
    }

    public function career()
    {
        $vacancies = Vacancy::latest()->take(4)->get();

        return Inertia::render('Career', \compact('vacancies'));
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
        $demands = DemandGeneration::latest()->take(4)->get();
        $dataAnalytics = DataAnalytics::latest()->take(3)->get();
        $intro = OurWorkIntro::latest()->first();

        return Inertia::render('OurWork', \compact('financings', 'systems', 'demands', 'dataAnalytics', 'intro'));
    }

    public function projects()
    {
        $projects = Project::latest()->take(6)->get();
        return Inertia::render('Project', compact('projects'));
    }

    public function newsletter(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email|unique:news_letter_lists,email',
        ]);

        NewsLetterList::create($data);
        return Redirect::route('welcome');
    }
    // Blog posts
    public function blog_index()
    {
        $blogs = Blog::latest()->paginate(4);
        $industries = Industry::all('name', 'slug');
        $featured_insights = Insight::latest()->take(4)->get();
        // dd($featured_insights);
        return Inertia::render('Blog/Blog', \compact('blogs', 'industries', 'featured_insights'));
    }
    // view a blog
    public function blog_view($slug)
    {
        $type = 'blog';
        $blog = Blog::where('slug', $slug)->first();

        if(!$blog) {
            $blog = Insight::where('image', $slug)->first();
            $type = 'insight';
        }

        $industries = Industry::all('name', 'slug');
        $recent_blogs = Blog::latest()->take(4)->get();
        $featured_insights = Insight::latest()->take(4)->get();
        return Inertia::render('Blog/ReadBlog', compact('blog', 'industries', 'recent_blogs', 'type', 'featured_insights'));
    }
    // blog category
    public function blog_category($industry_slug)
    {
        $blogs = Blog::where('industry_slug', $industry_slug)->latest()->paginate(5);
        $featured_insights = Insight::latest()->take(4)->get();

        if(!$blogs[0]) {
            return redirect()->back();
        }
        return Inertia::render('Blog/BlogCategory', compact('blogs', 'featured_insights'));
    }
}
