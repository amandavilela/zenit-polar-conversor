var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css');


gulp.task('dependencies', function(){
  gulp.src('bower_components/normalize-css/normalize.css')
  .pipe(rename('_normalize.scss'))
  .pipe(gulp.dest('scss/libs'));

  gulp.src('bower_components/angular/angular.min.js')
  .pipe(gulp.dest('js/vendor'));
});

gulp.task('sass', function() {
    gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
});
