const
  gulp                = require('gulp'),
  nunjucksRender      = require('gulp-nunjucks-render'),
  sass = require('gulp-sass');

const htmlMain = gulp.task('html', () =>
  gulp.src("./src/core/index.html")
    .pipe(nunjucksRender())
    .pipe(gulp.dest("./dist"))
);

gulp.task('sass', function () {
  return gulp.src('./src/core/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});