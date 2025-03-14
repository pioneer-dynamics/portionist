<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <script src="https://simple-analytics-develop-pr2n0q.laravel.cloud/tracker.js" data-organization="pZR3ozAXNw" data-server="https://simple-analytics-develop-pr2n0q.laravel.cloud">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/png" href="{{ Vite::asset('resources/static/logo.small.png') }}">

        <meta property="og:title" content="{{ config('app.name') }}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{ config('app.url') }}" />
        <meta property="og:logo" content="{{ Vite::asset('resources/static/logo.png') }}" />
        <meta property="og:description" content="Generate interesting mixes of cocktails, mocktails, and food based on ingredients you have" />

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        <script src="https://cdn.counter.dev/script.js" data-id="20673cc8-6f43-43dd-a74b-0ef1bfb1220f" data-utcoffset="10"></script>
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
