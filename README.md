# gulp-sass-boilerplate

A litte demo for transpiling Sass to CSS using Node.js and [Gulp](http://gulpjs.com/). Also includes source maps and [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically add vendor prefixes to the generated CSS.

Uses [Browsersync](https://www.browsersync.io/) for live CSS injection (without page refreshes).

## Prerequisites

[Node.js](https://nodejs.org/en/) ≥ v4.0

# Setup

1. Clone this repository
``` Bash
git clone https://github.com/TomOne/gulp-sass-boilerplate.git
```
2. Open a terminal, `cd` into this directory and run `npm install`

# Getting started

1. Run `npm start` in the terminal. A local server on `localhost:3000` is started automatically and opened in the browser.
2. Start changing Sass code in the `app/scss/` folder. After every change it is automatically transpiled, and injected into the page without the need of a refresh.
