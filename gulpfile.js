var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('build', ['clean'], function () {
  gulp.start('package');
});
