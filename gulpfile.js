'use strict'

// Import modules
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')

const autoPrefixerConfig = {
  browsers: [
    'last 2 versions',
    'ie 9',
    'android 2.3'
  ]
}

// Gulp task for:
// * Sass transpilation
// * Adding CSS vendor prefixes
// * Generating CSS source maps
gulp.task('sass', () => gulp
  .src('app/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([
    autoprefixer(autoPrefixerConfig)
  ]))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('app/css'))
)

// Recompile Sass if an SCSS files changes
gulp.task('sass:watch', () => gulp
  .watch('app/scss/**/*.scss', ['sass'])
)

// If Gulp is run without parameters, default to Sass compile task
gulp.task('default', ['sass'])
