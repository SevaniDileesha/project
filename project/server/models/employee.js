const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    email: { type: String },
    address: { type: String },
    contact: { type: Number },
    gender: { type: String },
    nic: { type: Number }
});

module.exports = { Employee };