var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = {
    src_files: './src/**/*.js',
    dist_folder: './dist',
};
 
gulp.task('build', function() {
  return gulp.src(paths.src_files)
    .pipe(concat('index.js'))
    .pipe(gulp.dest(paths.dist_folder));
});