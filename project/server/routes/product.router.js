const express = require('express');
const app = express();
const productRoute = express.Router();

// Require Business model in our routes module
let Product = require('../models/product');
const ctrlUser = require('../controllers/add_product.controller');

const jwtHelper = require('../config/jwtHelper');

productRoute.post('/addproduct', ctrlUser.addproduct);
module.exports = productRoute;