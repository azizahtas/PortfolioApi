//taskkill /F /IM node.exe Run this as admin To kill all node Processes
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Path = require('path');
var _ = require('lodash');
var RoutesApi = require('./routes').api;

var Port = 5555;
var path = 'mongodb://localhost:27017/Portfollio';
mongoose.connect(path);
app.set('view engine','hbs');
app.set('views',Path.join(__dirname,'Views'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:63342");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(express.static('Views/ErrorPage'));
//App MiddleWare For All Routes
app.all('/api',function (req,res,next) {
    //Do your Authentication here For
    console.log('someone Accessed The Api!');
    next(); 
});

_.forEach(RoutesApi,function (key,value) {
    app.use('/api'+value,key); 
});


app.get('/',function (req,res) {
    res.redirect('/api');
});
app.get('/api',function (req,res) {
    res.render('ErrorPage/index');
});

// Handle 404
app.use(function(req, res) {
    res.status(400);
    res.render('ErrorPage/index', {title: '404: File Not Found'});
});

// Handle 500
app.use(function(error, req, res, next) {
    res.status(500);
    res.render('ErrorPage/index', {title:'500: Internal Server Error', error: error});
});
app.listen(Port,function () {
    console.log('Listening On Port '+Port);
});
