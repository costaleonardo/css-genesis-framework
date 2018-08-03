const gulp = require('gulp');
const postCss = require('gulp-postcss');
const autoprefixer = require('autoprefixer-core');

// Add autoprefixes
gulp.task('css:autoprefix', () => {
  const processors = [
    autoprefixer({ browsers:['last 2 version'] })
  ];

  return gulp.src('./dist/genesis.css')
             .pipe(postCss(processors))
             .pipe(gulp.dest('./dist'));
});
