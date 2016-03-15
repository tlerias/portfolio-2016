var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('styles', function () {
  return gulp.src('app/assets/styles/*.scss')
    .pipe($.sass({style: 'expanded'}))
    .on('error', handleError)
    .pipe(gulp.dest('app/.tmp'))
    .pipe($.size());
});

gulp.task('clean', function () {
  return gulp.src(['app/src/.tmp', 'dist'], { read: false }).pipe($.rimraf());
});


