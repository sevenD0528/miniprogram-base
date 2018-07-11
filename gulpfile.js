// const path = require('path');
const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
// const browserSync = require('browser-sync');
const gulpLoadPlugins = require('gulp-load-plugins');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

const $ = gulpLoadPlugins();
// const reload = browserSync.reload;

// Copy all files at the root level (app)
gulp.task('copy', () =>
  gulp.src([
    'client/**',
    '!client/cdn',
    '!client/**/*.scss'
  ], {
    dot: true
  })
  .pipe(gulp.dest('dist'))
  .pipe($.size({
    title: 'copy'
  }))
);

// sass 编译 生成小程序wxss
gulp.task('sass', function () {
  gulp.src([
    'client/**/*.scss'
  ])
  .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(rename(function (path) {
    // path.basename = 'xxx';
    path.extname = ".wxss";
  }))
  .pipe(gulp.dest('dist'));
});

//在命令行执行：gulp watch，就可实现监听文件变化来自动编译
gulp.task('watch', function () {
  gulp.watch('client/**/*.*', ['default']);
});

// Clean output directory
gulp.task('clean', () => del(['.tmp', 'dist/*', '!dist/.git'], {
  dot: true
}));

// Build production files, the default task
gulp.task('default', ['clean'], cb =>
  runSequence(
    'copy',
    'sass',
    cb
  )
);

