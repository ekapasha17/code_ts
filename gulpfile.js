var gulp = require('gulp');
//var ts = require("gulp-typescript");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var gutil = require("gulp-util");
var paths = {
    pages: ['application/views/*.php']
};

/*gulp.task("default", function () {
        return browserify({
            basedir: '.',
            debug: true,
            entries: ['assets/js/hello-world.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("./public/js/"));
});*/

/*var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['assets/js/hello-world.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("./public/js/"));
}

gulp.task("default", bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);*/
//gulp.task("default", function () {
    var watchedBrowserify = watchify(browserify({
        basedir: '.',
        debug: true,
        entries: ['assets/js/hello-world.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify))
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    });

    function bundle() {
        return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("./public/js/"));
    }
    /**/
//});

gulp.task("default", bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);