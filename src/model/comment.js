var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    author: { type: String },
    text: { type: String }
});

var CommentModel = mongoose.model('Comments', CommentSchema);

module.exports = CommentModel;