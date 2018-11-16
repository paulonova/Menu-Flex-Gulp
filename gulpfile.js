// gulpfile.js

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// set absolute path to assets folder
var sassPath = 'src/scss';
var cssPath = 'public/css';



// gulp.task('sass', function() {
//    return gulp.src(sassPath + '/style.scss')
//                .pipe(sass())
//                .pipe(cleanCSS({compatibility: 'ie8'}))
//                .pipe(gulp.dest(cssPath))
//                .pipe(reload({
//                   stream: true
//                 }));
// });



// gulp.task('default',['styles', 'browser-sync', 'javascript'], function() {
//    gulp.watch('src/scss/*.scss', ['sass']);
// });


// Static server
gulp.task('browser-sync', function() {
   browserSync.init({
       server: {
         baseDir: "./public/index.html"
       }
   });
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

   browserSync.init({
       server: "./public/"
   });

   gulp.watch("src/scss/*.scss", ['sass']);
   gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
   return gulp.src("src/scss/*.scss")
       .pipe(sass())
       .pipe(gulp.dest("public/css"))
       .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);