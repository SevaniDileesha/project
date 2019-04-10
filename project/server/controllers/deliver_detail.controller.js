mongoose = require('mongoose')//
//config = require('./DB');//

const User = mongoose.model('DeliverDetails');

module.exports.deliverdetails = (req, res, next) => {
    var user = new User();
    user.recipient_name = req.body.recipient_name;
    user.recipient_phone = req.body.recipient_phone;
    user.delivery_address = req.body.delivery_address;
    user.delivery_city = req.body.delivery_city;
    user.location_type = req.body.location_type;
    user.delivery_date= req.body.delivery_date;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
}

