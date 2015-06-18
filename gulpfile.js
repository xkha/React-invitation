var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var cors = require('cors');
var configWebpack = require('./webpack.config');
var store = require('./src/store/comment/CommentInit');
var config = require('./src/libs/config');
var gulp = require('gulp');

gulp.task("server", function() {
    var server = new webpackDevServer(webpack(configWebpack), {
        publicPath: configWebpack.output.publicPath,
        hot: true
    });

    var env = process.env.NODE_ENV || 'development';
    if ('development' == env) {
        server.app.use(morgan('dev'));
    }

    server.app.use(methodOverride());
    server.app.use(bodyParser.json());
    server.app.use(bodyParser.urlencoded({extended: true}));
    server.app.use(cors());

    store.init(server.app);

    server.listen(config.get('server-port'), 'localhost', function (err) {
        if(err) {
            console.log(err);
        }
        console.log('DevServer started: http://localhost:' + config.get('server-port') + '/');
    });
});

gulp.task("default", ["server"]);