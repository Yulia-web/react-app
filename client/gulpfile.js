const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('styles', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('index.css'))
    .pipe(gulp.dest('src/styles'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/styles'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.scss', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));