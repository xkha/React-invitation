var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('../libs/config');
var morgan = require('morgan');
var methodOverride = require('method-override');
var api = require('../api/api');

var app = express();

app.set('port', (process.env.PORT || config.get('port')));

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    app.use(morgan('dev'));
}

app.use(methodOverride());

app.use('/', express.static(path.join(__dirname, '/../public')));
app.use('/', express.static(path.join(__dirname, '/../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

api.init(app);







