var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var restify = require('express-restify-mongoose');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '/../public')));
app.use('/', express.static(path.join(__dirname, '/../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

/*define schema db*/
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    author: { type: String },
    text: { type: String }
});

var CommentModel = mongoose.model('Comments', CommentSchema);
restify.serve(app, CommentModel);

mongoose.connect('mongodb://localhost:27017/comments');

app.get('/comments', function (req, res) {
    return CommentModel.find(function (err, comments) {
        if (!err) {
            return res.send(comments);
        } else {
            res.statusCode = 500;
            return res.send({ error: 'Server error' });
        }
    });
});

app.post('/comments', function(req, res) {
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
});