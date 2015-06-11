var CommentModel = require('./../model/comment');

var logger = require('./../libs/logs');

CommentService = {};

CommentService.find = function (req, res) {
    return CommentModel.find(function (err, comments) {
        if (!err) {
            return res.send(comments);
        } else {
            res.statusCode = 500;
            return res.send({ error: 'Server error' });
        }
    });
};

CommentService.save = function(req, res) {
    var comment = new CommentModel({
        author: req.body.author,
        text: req.body.text
    });

    comment.save(function (err) {
        if (!err) {
            logger.info('Save comment:' + comment);
            return res.send({status: 'OK', comment: comment});
        }
    });
};

module.exports = CommentService;