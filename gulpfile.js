var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');

var morgan = require('morgan');
var cors = require('cors');
var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var eslint = require('gulp-eslint');

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var configWebpack = require('./webpack.config');
var config = require('./src/libs/config');

var vkStore = require('./src/api/init/vk');
var commentStore = require('./src/api/init/comment');

var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('./src/model/Account');

gulp.task('lint', function () {
    return gulp.src(['src/**/*.js', './*.js'])
        .pipe(eslint())
        .pipe(eslint.failOnError());
});

var devCompiler = webpack(configWebpack);

gulp.task('build', function() {
    devCompiler.run(function() {});
});

gulp.task('clean', function() {
    return gulp.src('./build/*.js', { read: false })
        .pipe(rimraf({ force: true }));
});

gulp.task('server', function() {

    var server = new webpackDevServer(webpack(configWebpack), {
        publicPath: configWebpack.output.publicPath,
        hot: true,
        stats: {
            colors: true
        }
    });

    server.listen(config.get('server-port'), 'localhost', function (err) {
        if(err) {
            console.log(err);
        }
        console.log('DevServer started: http://localhost:' + config.get('server-port') + '/');
    });

    var env = process.env.NODE_ENV || 'development';
    if (env === 'development') {
        server.app.use(morgan('dev'));
    }

    server.app.use(methodOverride());
    server.app.use(bodyParser.json());
    server.app.use(bodyParser.urlencoded({extended: true}));
    server.app.use(cors());

    // session config
    mongoose.connect(config.get('mongoose:uri'));
    server.app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    }));

    // passport config
    passport.use(new LocalStrategy(Account.authenticate()));
    passport.serializeUser(Account.serializeUser());
    passport.deserializeUser(Account.deserializeUser());

    server.app.use(passport.initialize());
    server.app.use(passport.session());

    // init api
    commentStore.init(server.app);
    vkStore.init(server.app);

    // routes
    server.app.post('/login', passport.authenticate('local'), function(req, res) {
        return res.send(req.user);
    });

     server.app.post('/register', function(req, res) {
         Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
            if (err) {
                console.log(err);
            } else if(account) {
                console.log(account);
            }
            passport.authenticate('local')(req, res, function () {
                res.render('index', { name: 'John' });
            });
        });
    });

    /*server.app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });*/

    // handle errors
    server.app.use(function(err, req, res, next) {
        console.error(err.stack);
        next(err);
    });
    server.app.use(function(err, req, res, next) {
        if (req.xhr) {
            res.status(500).send({ error: 'Something blew up!' });
        } else {
            next(err);
        }
    });
});

gulp.task('default', ['lint', 'clean', 'build', 'server']);


