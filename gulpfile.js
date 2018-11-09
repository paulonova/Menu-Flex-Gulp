// gulpfile.js

var gulp = require('gulp');
// var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

gulp.task('css', function() {
   return gulp.src('src/scss/style.scss')
               .pipe(sass())
            //    .pipe(cleanCSS({compatibility: 'ie8'}))
               .pipe(gulp.dest('public/css'));
});