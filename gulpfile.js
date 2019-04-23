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

/*
gulp.task("printName", function() {
  console.log("My name is Maddie!");
});

gulp.task("printAge", function() {
  console.log("I am 22!");
});
*/

//gulp.task("default", []);
