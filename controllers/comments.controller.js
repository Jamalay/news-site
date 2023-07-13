const Comment = require("../models/Comment.model");

module.exports.commentsController = {
    addCommentToNews: function (req, res) {
        const { commentatorName, commentText, commentedNews } = req.body;
        Comment.create({
            commentatorName,
            commentText,
            commentedNews,
        }).then((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },
    deleteComment: function (req, res) {
        Comment.findByIdAndDelete({_id: req.params.id})
            .then((err, data) => {
                if(err){
                    res.json(err);
                }else{
                    res.json(data);
                }
            })
    },
    getAllCommentsFromNews: function (req, res) {
        Comment.find({commentedNews: req.params.id})
            .then((err, data) => {
                if(err){
                    res.json(err);
                }else{
                    res.json(data);
                }
            })
    }
}