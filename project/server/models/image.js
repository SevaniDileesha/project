const mongoose = require('mongoose');
//const config = require('../config/database');
const Schema = mongoose.Schema;

// User Schema
let AddImage = new Schema({
   image: {
        type: String
    }
    
},{
        collection: 'addimage'
});


module.exports = mongoose.model('AddImage', AddImage);