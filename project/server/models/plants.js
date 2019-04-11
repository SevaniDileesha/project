const mongoose = require('mongoose');

var Plants = mongoose.model('Plants', {
    name: { type: String },
    discription: { type: String },
    quantity: { type: Number },
    use: { type: String }
});

module.exports = { Plants };