const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  text: String
});

module.exports = mongoose.model('Comment', CommentSchema);
