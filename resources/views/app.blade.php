<!DOCTYPE html>
<html class="h-full bg-gray-100" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Trackly</title>
        
        <link href="{{ asset(mix('css/app.css')) }}" rel="stylesheet">
    </head>
    <body class="h-full antialiased">
        @inertia
        <script src="{{ asset(mix('/js/app.js')) }}" defer></script>
    </body>
</html>
