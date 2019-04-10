const mongoose = require('mongoose');

var Plants = mongoose.model('Plants', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = { Plants };