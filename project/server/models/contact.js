const mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
    name: { type: String },
    email: { type: String },
    contactn: { type: Number },
    comment: { type: String }

});

module.exports = { Contact };