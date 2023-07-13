const Category = require("../models/Category.model")

module.exports.categoryController = {
    addCategory: function (req, res) {
        Category.create({
            name: req.body.name
        }).then((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },
    deleteCategory: function (req, res) {
        Category.findByIdAndDelete({ _id: req.params.id })
            .then((err, data) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            })
    },
    getAllCategories: function (req, res) {
        Category.find({}).then((err, data) => {
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        });
    }
}