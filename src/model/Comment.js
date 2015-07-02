var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Comment = new Schema({
    author: { type: String },
    text: { type: String }
});

module.exports = mongoose.model('Comments', Comment);
