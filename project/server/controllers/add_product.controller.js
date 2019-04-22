mongoose = require('mongoose')//
//config = require('./DB');//

const User = mongoose.model('AddProduct');

module.exports.addproduct = (req, res, next) => {
    var user = new User();
    user.product_name = req.body.product_name;
    user.product_img= req.body.product_img;
    user.product_description = req.body.product_description;
    user.product_price = req.body.product_price;
    user.product_category = req.body.product_category;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
}

