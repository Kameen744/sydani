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
            <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
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

            <script src="{{asset('dashboard/vendor/js/helpers.js') }}"></script>
            <script src="{{asset('dashboard/js/config.js') }}"></script>
            <script src="{{asset('dashboard/vendor/libs/jquery/jquery.js')}}"></script>
            <script src="{{asset('dashboard/vendor/libs/popper/popper.js')}}"></script>
            <script src="{{asset('dashboard/vendor/js/bootstrap.js')}}"></script>
            <script src="{{asset('dashboard/vendor/libs/perfect-scrollbar/perfect-scrollbar.js')}}"></script>
            <script src="{{asset('dashboard/vendor/js/menu.js')}}"></script>
            <script src="{{asset('dashboard/vendor/libs/apex-charts/apexcharts.js')}}"></script>

            <script src="{{asset('dashboard/js/dashboards-analytics.js')}}"></script>

            <script src="{{ asset('js/dashboard.js') }}" defer></script>
            <script src="{{asset('dashboard/js/main.js')}}" defer></script>
        @else
            <link rel="stylesheet" href="{{ asset('css/app.css') }}">
            <script src="{{ asset('js/app.js') }}" defer></script>
        @endif
    </head>
    <body class="font-sans antialiased">
        @routes
        @inertia

        @if(Request::is('admin/*') or Request::is('login'))

        @else
            <script src="{{asset('sydani/assets/js/main.js')}}" defer></script>
        @endif
    </body>
</html>
