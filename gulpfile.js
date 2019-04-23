var gulp = require("gulp");

gulp.task("printName", function() {
  console.log("My name is Maddie!");
});

gulp.task("printAge", function() {
  console.log("I am 22!");
});

gulp.task("default", ["printName", "printAge"]);
