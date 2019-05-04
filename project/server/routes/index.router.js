const express = require('express');
const router = express.Router();
const app = express();//
var multer = require('multer');//
var DIR = './uploads/';//
//var upload = multer({dest: DIR}).single('photo');
//const multer = require('multer');


const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');


router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);




module.exports = router;



