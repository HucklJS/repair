const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const tinypng = require("gulp-tinypng-compress");
const uglify = require("gulp-uglify");

function minifyCss() {
  return (
    gulp
      .src("src/css/*.css")
      .pipe(cleanCSS({ compatibility: "ie8" }))
      // .pipe(rename({ extname: ".min.css" }))
      .pipe(gulp.dest("dist/css/"))
  );
}

function moveJs() {
  return (
    gulp
      .src(["src/js/*.js", "!src/js/*.min.js"])
      // .pipe(uglify()) Предварительно нужно Babel юзнуть
      .pipe(gulp.src("src/js/*.min.js"))
      .pipe(gulp.dest("dist/js"))
  );
}

function minifyHTML() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
}

function fonts() {
  return gulp.src("src/fonts/**/*").pipe(gulp.dest(["dist/fonts"]));
}

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function toTinyPng() {
  return gulp
    .src("src/img/**/*.{png,jpg,jpeg}")
    .pipe(
      tinypng({
        key: "0ck3GlNMpGk8QCvnK16ZJLsXnpjT7C02"
      })
    )
    .pipe(gulp.dest("dist/img"));
}

exports.minifyHTML = minifyHTML;
exports.minifyCss = minifyCss;
exports.moveJs = moveJs;
exports.fonts = fonts;
exports.toTinyPng = toTinyPng;
exports.default = defaultTask;
