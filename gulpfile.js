let gulp = require('gulp');
let browserSync = require('browser-sync').create();

gulp.task('default', [], function() {
    browserSync.init({
        server: {
            baseDir: 'demo/',
            index: 'index.html'
        }
    })
    // gulp.watch('demo/(!node_modules)**').on('change', browserSync.reload);
    gulp.watch(['demo/**','!demo/monaco-editor-git/node_modules/**','!demo/monaco--/**']).on('change', browserSync.reload);
})