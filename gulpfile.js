import { task, src, dest, series, watch } from 'gulp';
import sass from 'gulp-sass';

task('sass', function(cb) {
    src('*.scss')
        .pipe(sass())
        .pipe(dest(function(f) {
            return f.base;
        }));
    cb();
});

task('default', series('sass', function(cb) {
    watch('*.scss', series('sass'));
    cb();
}));