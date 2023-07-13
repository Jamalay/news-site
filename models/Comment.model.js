const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    commentatorName: String,
    commentText: String,
    commentedNews: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'News',
    }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;