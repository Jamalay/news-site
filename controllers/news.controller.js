const News = require("../models/News.model");

module.exports.newsController = {
    addNews: function (req, res) {
        const { title, text, category } = req.body;
        News.create({
            title,
            text,
            category
        }).then((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },

    deleteNews: function (req, res) {
        News.findByIdAndDelete({ _id: req.params.id })
            .then((err, data) => {
                if (err) {
                    rejson(err);
                } else {
                    res.json(data);
                }
            })
    },

    changeNews: function (req, res) {
        const { title, text, category } = req.body;
        News.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    title,
                    text,
                    category
                }
            }).then((err, data) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            })
    },

    getNews: function (req, res) {
        News.findById(
            { _id: req.params.id }
        ).then((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },

    getAllNews: function (req, res) {
        News.find({})
            .then((err, data) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            })
    },

    getAllNewsInCategory: function (req, res) {
        News.find( {category: req.params.id} )
        .then((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })
    }
}