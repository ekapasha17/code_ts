const mix = require('laravel-mix');

mix.js('assets/js/app.js', 'public/js')
.sass('assets/sass/app.scss', 'public/css')
.setPublicPath('./').browserSync({
    proxy:'http://localhost/ci_socket/',
    files:['application/views/*']
}).version();/*
.options({
    processCssUrls: false
}).browserSync();*/