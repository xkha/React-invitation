var mongoose = require("mongoose");
var restify = require('express-restify-mongoose');
var config = require('./../../libs/config');

var CommentModel = require('./../../model/CommentModel');
var CommentStore = require('./../../store/comment');

CommentInit = {};

CommentInit.init = function init(app) {
    mongoose.connect(config.get('mongoose:uri'));

    restify.serve(app, CommentModel);

    app.get('/api/comments', CommentStore.find);
    app.post('/api/comments', CommentStore.save);
};

module.exports = CommentInit;