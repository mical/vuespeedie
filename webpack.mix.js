const { mix } = require('laravel-mix');

mix.js('src/main.js', '.build/js/bundle.js')
    .sass('assets/sass/app.scss', '.build/css');
