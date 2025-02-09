<!DOCTYPE html>
  <html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>small RESTful api</title>
    <!-- Styles -->
    <link href="{{ asset('css/AppStyle.css') }}" rel="stylesheet">
    <link href="{{ asset('css/FilterForm.css') }}" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}"></script>
  </body>
</html>