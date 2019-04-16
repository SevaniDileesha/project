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

mongoose = require('mongoose')//
//config = require('./DB');

const rtsIndex = require('./routes/index.router');
const deliver_detailRoute = require('./routes/deliver_detail.router');//

/*mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);*/

var app = express();

//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/server', express.static(path.join(__dirname, 'server')));

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello');
});

//app.listen(2000, () => console.log('Server started...'));

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/deliverdetails', deliver_detailRoute);//

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