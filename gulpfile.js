var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

gulp.task("sass", function() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
});

gulp.task("browser-sync", function() {
  browserSync.init({
    server: "./public",
    notify: false,
    open: false
  });
});

//Runs automatically after gulp command in terminal
gulp.task("default", ["sass", "browser-sync"], function() {
  gulp.watch("./src/scss/**/*.scss", ["sass"]);
});
