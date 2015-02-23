var gulp        = require("gulp");
var handlebars  = require("gulp-handlebars");
var wrap        = require("gulp-wrap");
var declare     = require("gulp-declare");
var concat      = require("gulp-concat");
var less        = require("gulp-less");
var browserSync = require("browser-sync");

var templatePath = "./js/templates/*.hbs";
var lessPath     = "./less/**/*.less";

gulp.task("templates", function(){

  gulp.src(templatePath)
    .pipe(handlebars())
    .pipe(wrap("Handlebars.template(<%= contents %>)"))
    .pipe(declare({
      namespace: "JST"
    }))
    .pipe(concat("templates.js"))
    .pipe(gulp.dest("./js/"));

});

gulp.task("less", function() {

  gulp.src(lessPath)
    .pipe(less())
    .pipe(gulp.dest("./css"));

});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});



gulp.task("default", ["templates", "less", "browser-sync"], function() {
  gulp.watch(templatePath, ["templates", browserSync.reload]);
  gulp.watch(lessPath, ["less", browserSync.reload]);
});
