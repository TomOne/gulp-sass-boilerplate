'use strict'

// Import modules
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const browserSync = require('browser-sync')

const browserSyncCreate = browserSync.create()

const autoPrefixerConfig = {
  browsers: [
    'last 2 versions',
    'ie 9',
    'android 2.3'
  ]
}

// Start Browsersync server with live CSS injection
gulp.task('serve', ['sass'], () => {
  browserSyncCreate.init({
    server: './app/'
  })
  gulp.watch('app/scss/**/*.scss', ['sass'])
})

// Gulp task for:
// * Sass transpilation
// * Adding CSS vendor prefixes
// * Generating CSS source maps
// * Live CSS injection with Browsersync
gulp.task('sass', () => gulp
  .src('app/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([
    autoprefixer(autoPrefixerConfig)
  ]))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSyncCreate.stream({
    match: '**/*.css'
  }))
)

// Recompile Sass if an SCSS files changes
gulp.task('sass:watch', () => gulp
  .watch('app/scss/**/*.scss', ['sass'])
)

// If Gulp is run without parameters, default to Sass compile task
gulp.task('default', ['sass'])
