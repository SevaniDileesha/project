mongoose = require('mongoose')//
//config = require('./DB');//

const User = mongoose.model('AddImage');

module.exports.addimage = (req, res, next) => {
    var user = new User();
    user.image = req.body.image;
    
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
}
