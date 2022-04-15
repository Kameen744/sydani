<!DOCTYPE html>
@if(Request::is('admin/*') )
<html lang="en" class="light-style layout-menu-fixed" dir="ltr"
  data-theme="theme-default"
  data-assets-path="{{asset('dashboard/')}}"
  data-template="vertical-menu-template-free"
>
@else
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endif
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Sydani') }}</title>

        {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"> --}}

        @if (Request::is('admin/*') or Request::is('login'))
            {{-- <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
            />
            <link rel="stylesheet" href="{{asset('dashboard/vendor/fonts/boxicons.css') }}" />
            <link rel="stylesheet" href="{{asset('dashboard/vendor/css/core.css') }}" class="template-customizer-core-css" />
            <link rel="stylesheet" href="{{asset('dashboard/vendor/css/theme-default.css') }}" class="template-customizer-theme-css" />
            <link rel="stylesheet" href="{{asset('dashboard/css/demo.css') }}" />
            <link rel="stylesheet" href="{{asset('dashboard/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}" />
            <link rel="stylesheet" href="{{asset('dashboard/vendor/libs/apex-charts/apex-charts.css') }}" />
            --}}
            <link rel="stylesheet" href="{{ mix('css/dashboard.css') }}">
            <script src="{{ mix('js/dashboard.js') }}" defer></script>
            <script src="{{asset('dashboard/vendor/js/helpers.js') }}"></script>
            <script src="{{asset('dashboard/js/config.js') }}"></script>
        @else
            <link rel="stylesheet" href="{{ mix('css/app.css') }}">
            <script src="{{ mix('js/app.js') }}" defer></script>
        @endif
    </head>
    <body class="font-sans antialiased">
        @routes
        @inertia

        @if(Request::is('admin/*') )
            <script src="{{asset('dashboard/vendor/libs/jquery/jquery.js')}}" defer></script>
            <script src="{{asset('dashboard/vendor/libs/popper/popper.js')}}" defer></script>
            <script src="{{asset('dashboard/vendor/js/bootstrap.js')}}" defer></script>
            <script src="{{asset('dashboard/vendor/libs/perfect-scrollbar/perfect-scrollbar.js')}}" defer></script>
            <script src="{{asset('dashboard/vendor/js/menu.js')}}" defer></script>
            <script src="{{asset('dashboard/vendor/libs/apex-charts/apexcharts.js')}}" defer></script>
            <script src="{{asset('dashboard/js/main.js')}}" defer></script>
            <script src="{{asset('dashboard/js/dashboards-analytics.js')}}" defer></script>
            {{-- <script async defer src="https://buttons.github.io/buttons.js" defer></script> --}}
        @else
            <script src="{{asset('sydani/assets/js/main.js')}}" defer></script>
        @endif
    </body>
</html>
