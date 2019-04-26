require('./config/config');
require('./models/db');
require('./config/passportConfig');
var employeeController = require('./controllers/employeeController.js');
var plantControllers = require('./controllers/plantControllers.js');




const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const passport = require('passport');
const multer = require('multer');//
//app.use(bodyParser.urlencoded({extended: true}))//


mongoose = require('mongoose')
//config = require('./DB');

const rtsIndex = require('./routes/index.router');
const deliver_detailRoute = require('./routes/deliver_detail.router');//
const productRoute = require('./routes/product.router');
const imageRoute = require('./routes/image.router');

/*mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);*/

var app = express();

//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}))//
app.use(express.static('public'));//
app.set('view engine', 'ejs');//

// Static folder
app.use('/server', express.static(path.join(__dirname, 'server')));

//Body Parser Middleware
//app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });//



//app.listen(2000, () => console.log('Server started...'));

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/deliverdetails', deliver_detailRoute);//
app.use('/addproduct',  productRoute);//
app.set('view engine', 'ejs');//
app.use('/addimage', imageRoute);//

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});
app.use('/employees', employeeController);
app.use('/plants', plantControllers);


// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

