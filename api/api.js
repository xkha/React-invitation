var mongoose = require("mongoose");
var restify = require('express-restify-mongoose');
var config = require('../libs/config');

var CommentModel = require('./../model/comment');
var CommentService = require('./../api/comment');

api = {};

api.init = function init(app) {
    mongoose.connect(config.get('mongoose:uri'));

    restify.serve(app, CommentModel);

    app.get('/comments', CommentService.find);
    app.post('/comments', CommentService.save);
};

module.exports = api;