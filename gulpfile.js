var gulp = require('gulp');
var sass = require ('gulp-sass');

gulp.task('sass', function () {
	gulp.src(['main.scss', 'animate.scss'])
		.pipe(sass())
		.pipe(gulp.dest(''));
});

gulp.task('default', function () {
	gulp.run('sass');

	// watch
	gulp.watch('**.scss', function () {
		gulp.run('sass');
	});

});