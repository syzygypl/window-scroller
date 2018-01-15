const gulp = require('gulp');
const ts = require('gulp-typescript').createProject('tsconfig.json');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const gulpsync = require('gulp-sync')(gulp);

gulp.task('watch', () => gulp.watch('src/**', ['build']));

gulp.task('build', gulpsync.sync([['clean-tmp', 'clean'], 'ts-to-es6', 'es6-to-es3']));

gulp.task('ts-to-es6', () => gulp.src('src/**')
    .pipe(ts())
    .pipe(gulp.dest('tmp/es6'))
);

gulp.task('es6-to-es3', () => gulp.src('tmp/es6/**')
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest('dist'))
);

gulp.task('clean', () => gulp.src('./dist/*')
    .pipe(clean())
);

gulp.task('clean-tmp', () => gulp.src('./tmp/es6/*')
    .pipe(clean())
);
