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

var passport = require('passport');
var expressSession = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('./src/model/Account');

var ReactViews = require('express-react-views');

gulp.task("server", function() {
    var server = new webpackDevServer(webpack(configWebpack), {
        publicPath: configWebpack.output.publicPath,
        hot: true
    });

    server.listen(config.get('server-port'), 'localhost', function (err) {
        if(err) {
            console.log(err);
        }
        console.log('DevServer started: http://localhost:' + config.get('server-port') + '/');
    });

    var env = process.env.NODE_ENV || 'development';
    if ('development' == env) {
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

    // express-react-views config
    server.app.set('view engine', 'js');
    server.app.engine('js', ReactViews.createEngine());
    server.app.set('views', __dirname + '/src/components');

    // init api
    commentStore.init(server.app);
    vkStore.init(server.app);

    // routes
    server.app.post('/login', passport.authenticate('local'), function(req, res) {
        res.redirect('/');
    });

     server.app.post('/register', function(req, res) {
         Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
            if (err) {
                console.log(err);
            }
            passport.authenticate('local')(req, res, function () {
                res.render('CommentBox', { user : req.user });
            });
        });
    });

    server.app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
});

gulp.task("default", ["server"]);