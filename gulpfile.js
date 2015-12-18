var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('scripts', function() {
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
}); // scripts task

gulp.task('styles', function() {
	console.log('runs styles');
}); // styles task

gulp.task('default', ['scripts', 'styles']);