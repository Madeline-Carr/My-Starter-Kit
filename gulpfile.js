var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var gprint = require('gulp-print').default;
var gutil = require('gulp-util');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var webpack_stream = require('webpack-stream');
var webpack_config = require('./webpack.config.js');

//Default and Production Tasks
gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.js', ['webpack']);
    gulp.watch(['./src/**/*.js']).on('change', reload);
});

gulp.task('production', ['sass:minify']);

//Other Tasks

///SASS
gulp.task('sass', function() {
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
            })
        )
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
});

gulp.task('sass:minify', function() {
    return gulp
        .src('./public/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'));
    // .pipe(browserSync.stream());
});

///WEBPACK
const paths = {
    src: './src/',
    build: './public/js/',
};

gulp.task('clean', () => {
    return gulp
        .src(`${paths.build}*`)
        .pipe(gprint())
        .pipe(vinylPaths(del));
});

gulp.task('webpack', ['clean'], () => {
    return webpack_stream(webpack_config).pipe(gulp.dest(`${paths.build}`));
});

///Browser Sync
gulp.task('browser-sync', ['webpack'], function() {
    browserSync.init({
        server: './public',
        notify: false,
        open: false,
    });
});
