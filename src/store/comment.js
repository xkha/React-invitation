var CommentModel = require('./../model/CommentModel');
var logger = require('./../libs/logs');

CommentStore = {};

CommentStore.find = function (req, res) {
    return CommentModel.find(function (err, comments) {
        if (!err) {
            return res.send(comments);
        } else {
            res.statusCode = 500;
            return res.send({ error: 'Server error' + err.toString() });
        }
    });
};

CommentStore.save = function(req, res) {
    var comment = new CommentModel({
        author: req.body.author,
        text: req.body.text
    });
    comment.save(function (err) {
        if (!err) {
            logger.info('Comment insert:' + comment);
        } else {
            res.statusCode = 500;
            return res.send({ error: 'Server error' + err.toString() });
        }
    });
};

module.exports = CommentStore;