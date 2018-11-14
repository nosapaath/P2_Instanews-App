// Proyect 2: INSTANEWS APP | Jonathan de la Mora-->

// Variables
var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync').create(),
    eslint = require("gulp-eslint");
    


gulp.task("default", function() {
  return gulp
    .src("./js/*.js") // What files do we want gulp to consume?
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {  
          baseDir: "./"
      }
  });
});

var sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  cssnano = require("gulp-cssnano"),
  prettyError = require("gulp-prettyerror"),
  rename = require("gulp-rename");
gulp.task("sass", function() {
  return gulp
    .src("./sass/styles.scss")
    .pipe(prettyError())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./build/css"))
    .pipe(cssnano())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./build/css"));
});

gulp.task('browserSync', function () {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });

  gulp
  .watch(["*.html", "js/*.js", "sass/*.scss"])
  .on("change", browserSync.reload);
});