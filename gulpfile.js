var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./public/css"));
});

//Runs automatically after gulp command in terminal
gulp.task("default", ["sass"], function() {
  gulp.watch("./src/scss/**/*.scss", ["sass"]);
});
