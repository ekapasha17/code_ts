var gulp = require('gulp');
var ts = require("gulp-typescript");
//var tsProject = ts.createProject("tsconfig.json");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    pages: ['./application/views/*.php']
};
gulp.task("default", function () {
    /*return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("public/js/"));*/
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
});