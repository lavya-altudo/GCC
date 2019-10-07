const gulp = require('gulp');
const less = require('gulp-less');

// Where your Less files are located
const srcDir = './assets/less/styles.less';
// Where your CSS files will be generated
const dstDir = './assets/css';

gulp.task('less', gulp.series(function() {
	return gulp
		.src(`${srcDir}`)
		.pipe(less())
		.pipe(gulp.dest(dstDir));
}));

gulp.task('default', function() {
	return gulp.watch('assets/less/component/**/*.less', gulp.series(['less']));
});


