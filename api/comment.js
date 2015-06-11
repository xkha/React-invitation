var CommentModel = require('./../model/comment');

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
            return res.send({ status: 'OK', comment: comment });
        } else {
            console.log(err);
        }
    });
};

module.exports = CommentService;