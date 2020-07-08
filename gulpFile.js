var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass'); 
var plumber  = require('gulp-plumber');
var uglify   = require('gulp-terser');
const babel = require('gulp-babel');
var concat   = require('gulp-concat');

//Develop Path
var mainScssFile = 'src/scss/main-styles.scss';
var scssFiles = 'src/scss/**/*.scss';
var jsFiles = 'src/js/**/*.js';

//Production Path
var cssFolderProduction = 'public/css/';
var jsFolderProduction = 'public/js/';
var jsFolderProductionName = 'scripts.js';

var sassProdOptions = {
    outputStyle: 'compressed'
}

gulp.task('sassprod', async function(){
    return gulp.src(mainScssFile)
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(rename('style-main.min.css'))
        .pipe(gulp.dest(cssFolderProduction))
});

gulp.task('scripts', function(){
    return gulp.src(jsFiles)
            .pipe(concat(jsFolderProductionName))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest(jsFolderProduction))

});

gulp.task('watch', function (done) {
    gulp.watch(scssFiles, gulp.series('sassprod'));
    gulp.watch(jsFiles, gulp.series('scripts'));
    done();
});

gulp.task('default', gulp.series('sassprod','scripts','watch'));
