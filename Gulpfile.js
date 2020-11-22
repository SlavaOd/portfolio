var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();


function copml(done) {
    gulp.src('./sass/**/*.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
    done();
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "../portfolio_site"
        },
        port: 3000
    });
}

function watchSass() {
    gulp.watch('./sass/**/*', copml)
}

gulp.task('default', gulp.parallel(sync, watchSass));
gulp.task(sync)