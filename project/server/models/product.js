const mongoose = require('mongoose');
//const config = require('../config/database');
const Schema = mongoose.Schema;

// User Schema
let AddProduct = new Schema({
    product_name: {
        type: String
    },
    product_img:{
        type:String
    },
    product_description:{
        type:String
    },
    product_price:{
        type:String
    },
    product_Category: {
        type: String
    }
    
},{
        collection: 'addproduct'
});


module.exports = mongoose.model('AddProduct', AddProduct);

/*module.exports.addProduct = function (newProduct, callback) {
    newProduct.save(callback);
       
}

module.exports.editProduct = function (oldProductID,newProduct, callback) {
    const query = { _id: oldProductID }
    Product.findByIdAndUpdate(query,newProduct, callback);

}

module.exports.removeProduct = function (productID, callback) {
    const query = { _id: productID };
    Product.remove(query, callback);

}*/