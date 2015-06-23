var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');

var morgan = require('morgan');
var cors = require('cors');
var gulp = require('gulp');

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var configWebpack = require('./webpack.config');
var config = require('./src/libs/config');

var vkStore = require('./src/api/init/vk');
var commentStore = require('./src/api/init/comment');

var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);

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

    mongoose.connect(config.get('mongoose:uri'));
    server.app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    }));

    commentStore.init(server.app);
    vkStore.init(server.app);

    server.app.get('/sign', function(req, res) {
        res.send(req.session.user);
    });

    server.app.get('/signout', function(req, res) {
        req.session.destroy(function(_) {
            res.redirect("/");
        });
    });

    server.listen(config.get('server-port'), 'localhost', function (err) {
        if(err) {
            console.log(err);
        }
        console.log('DevServer started: http://localhost:' + config.get('server-port') + '/');
    });
});

gulp.task("default", ["server"]);