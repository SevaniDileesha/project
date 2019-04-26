const express = require('express');
const app = express();
const productRoute = express.Router();

// Require Business model in our routes module
let Product = require('../models/product');
const ctrlUser = require('../controllers/add_product.controller');

const jwtHelper = require('../config/jwtHelper');

//productRoute.post('/addproduct', ctrlUser.addproduct);

productRoute.route('/add').post(function (req, res) {
    let product = new Product(req.body);
    let product=fs.readFileSync(req.file.path);
    product.save()
      .then(product => {
        res.status(200).json({'business': 'business in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });


  productRoute.route('/').get(function (req, res) {
    Product.find(function (err, products){
      var productChunks =[];
      var chunkSize =3;
      for(var i=0;i<products.length;i+=chunkSize){
        productChunks.push(products.slice(i,i+chunkSize));
      }
    res.json(products);
  });
});
module.exports = productRoute;