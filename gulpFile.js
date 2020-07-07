var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass'); 

var mainScssFile = 'src/scss/main-styles.scss';
var scssFiles = 'src/scss/**/*.scss';

var sassProdOptions = {
    outputStyle: 'compressed'
}

gulp.task('sassprod', async function(){
    return gulp.src(mainScssFile)
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(rename('style-main.min.css'))
        .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function (done) {
    gulp.watch(scssFiles, gulp.series('sassprod'));
    done();
});

gulp.task('default', gulp.series('sassprod','watch'));
