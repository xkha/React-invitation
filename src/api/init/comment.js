var restify = require('express-restify-mongoose');

var CommentModel = require('./../../model/CommentModel');
var CommentStore = require('./../../store/comment');

CommentInit = {};

CommentInit.init = function init(app) {

    restify.serve(app, CommentModel);

    app.get('/api/comments', CommentStore.find);
    app.post('/api/comments', CommentStore.save);
};

module.exports = CommentInit;