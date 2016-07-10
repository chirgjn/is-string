// Include gulp
var gulp = require('gulp')

// Include Our Plugins
var eslint = require('gulp-eslint')
var babel  = require('gulp-babel')
var mocha  = require('gulp-mocha')

// Lint Task
gulp.task('lint', function() {
  // Keeping custom-modules inside js/modules folder
  return gulp.src('src/*.js')
    .pipe(eslint({
      'env': {
        'browser': true,
        'node': true,
        'es6': true
      },
      'parser': 'babel-eslint',
      'extends': 'eslint:recommended',
      'parserOptions': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
        'impliedStrict': true
        }
      },
      "rules":{
        "no-console":0
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})
// Transpile JS
gulp.task('babel', ['lint'], function() {
  return gulp.src('src/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('lib'))
})
// Run Tests
gulp.task('test', ['babel'], function() {
  return gulp.src(['test/*.js'], { read: false })
  .pipe(mocha({
    reporter: 'spec'
  }))
})
// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['test'])
})
// Default Task
gulp.task('default', ['test', 'watch'])
