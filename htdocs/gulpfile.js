var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('default', ['css', 'watch']);


gulp.task('css', function () {
  return gulp.src('./styles/style.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: true,
      'include css': true
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch('./styles/*.styl', ['css']).on('change', browserSync.reload);
})

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
 
    return gulp.src('./public/stylesheets/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});