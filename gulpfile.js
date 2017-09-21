var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
    return gulp.src('sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass ({
            errLogConsole: true,
            outputStyle: 'nested',
            sourceComments: false,
        }).on("error", sass.logError))
		.pipe(autoprefixer({
				browsers:  [
					'last 3 chrome versions',
					'last 3 firefox versions',
					'last 3 opera versions',
					'last 3 safari versions',
					'last 3 ios versions',
					'android >= 4.0',
					'ie >= 10'
				]
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
})


gulp.task('watch', ['sass'], function() {
    gulp.watch('sass/style.scss', ['sass'])
});
