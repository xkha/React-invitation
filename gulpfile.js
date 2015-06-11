var gulp = require('gulp');
var watch = require('gulp-watch');
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');

var path = {
    OUT: 'app.js',
    DEST_SRC: 'build',
    ENTRY_POINT: 'src/app/app.js'
};

gulp.task('watch', function() {

    var watcher  = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }));

    return watcher.on('update', function () {
        watcher.bundle()
            .pipe(source(path.OUT))
            .pipe(gulp.dest(path.DEST_SRC))
        console.log('Updated');
    })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC));
});

/*gulp.task('server', function () {
    nodemon({
        script: 'src/server/server.js'
    });
});*/

//gulp.task('default', ['watch', 'server']);
gulp.task('default', ['watch']);