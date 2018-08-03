/**
  * Gulp tasks.
  *
  * 01. Compile Sass
  * 02. Watch for Sass changes
  * 03. Minify CSS
  * 04. Add autoprefixer
  *
  **/

// Gulp dependencies
const gulp         = require('gulp'),
      gulpSass     = require('gulp-sass'),
      cleanCss     = require('gulp-clean-css'),
      rename       = require('gulp-rename'),
      postCss      = require('gulp-postcss'),
      autoprefixer = require('autoprefixer-core');

// @TASK: Compile Sass
gulp.task('sass:compile', () => {
  return gulp.src('./src/genesis.scss')
             .pipe(gulpSass({ errLogToConsole: true }))
             .pipe(gulp.dest('./dist'));
});

// @TASK: Watch for Sass changes
gulp.task('sass:watch', () => gulp.watch('./src/**/*.scss', ['sass:compile']));

// @TASK: Minify CSS
gulp.task('css:minify', () => {
  return gulp.src('./dist/genesis.css')
             .pipe(cleanCss({ compatibility: 'ie8' }))
             .pipe(rename('genesis.min.css'))
             .pipe(gulp.dest('./dist'));
});

// @TASK: Add autoprefixer
gulp.task('css:autoprefix', () => {
  return gulp.src('./dist/genesis.css')
             .pipe(postCss(autoprefixer({ browsers:['last 2 version'] })))
             .pipe(gulp.dest('./dist'));
});
