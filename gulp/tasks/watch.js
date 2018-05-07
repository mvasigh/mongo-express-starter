const gulp = require('gulp'),
  watch = require('gulp-watch');

gulp.task('watch', () => {
  watch('./styles/**/*.css', () => {
    gulp.start('styles');
  });
});
