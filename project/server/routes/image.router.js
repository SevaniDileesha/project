const express = require('express');
const app = express();
const imagetRoute = express.Router();
var multer = require('multer');//
var DIR = './uploads/';//
//var upload = multer({dest: DIR}).single('photo');
//const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const uuidv4 = require('uuid/v4');
//const path = require('path');
const Resize = require('./Resize');//

// Require Business model in our routes module
let Product = require('../models/image');
const ctrlUser = require('../controllers/add_img.controller');

const jwtHelper = require('../config/jwtHelper');

//productRoute.post('/addproduct', ctrlUser.addproduct);



  const upload = multer({
    limits: {
      fileSize: 4 * 1024 * 1024,
    }
  });
  /*imagetRoute.get('/', async function (req, res) {
    await res.render('index');
  });//*/
  
  imagetRoute.post('/post', upload.single('image'), async function (req, res) {
    const imagePath = path.join(__dirname, '/public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
      res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({ name: filename });
  });//
module.exports = imagetRoute;