const gulp = require('gulp');
const gzip = require('gulp-gzip');
const del = require('del');
const concat = require('gulp-concat');

//build file locations
const jsSrc = './public/js/*';
const cssSrc = './public/css/*';
const htmlSrc = './public/*.html';
const imgSrc = './public/images/*';
const base = './public/'

//development scripts location
var jsSource = 'js/**/*.js';
var jsDest = 'assets/js/';

gulp.task('del', function(){
  del(['./public'], function(){
    console.log('Deleted Old public folder')
  })
})

gulp.task('compressJS', function() {
  return gulp.src(jsSrc)
    .pipe(gzip())
    .pipe(gulp.dest(base+'/js'));
});

gulp.task('compressCss', function() {
  return gulp.src(cssSrc)
    .pipe(gzip())
    .pipe(gulp.dest(base+'/css'));
});

gulp.task('compressHTML', function() {
  return gulp.src(htmlSrc)
    .pipe(gzip())
    .pipe(gulp.dest(base));
});

gulp.task('compressIMG', function() {
  return gulp.src(imgSrc)
    .pipe(gzip())
    .pipe(gulp.dest(base+'/images'));
});

gulp.task('build-js', function() {
  gulp.src(jsSource)
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(jsDest))
});  

gulp.task('watch', function(){
  gulp.watch(jsSource, ['build-js']);
});

gulp.task('default', ['build-js', 'watch']);

gulp.task('build', ['compressJS', 'compressCss', 'compressHTML', 'compressIMG'])