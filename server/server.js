var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var restify = require('express-restify-mongoose');
var config = require('../libs/config');

var app = express();

app.set('port', (process.env.PORT || config.get('port')));

app.use('/', express.static(path.join(__dirname, '/../public')));
app.use('/', express.static(path.join(__dirname, '/../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

mongoose.connect(config.get('mongoose:uri'));

var CommentModel = require('./../model/comment');
var CommentService = require('./../api/comment');
restify.serve(app, CommentModel);

app.get('/comments', CommentService.find);
app.post('/comments', CommentService.save);