var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Path = require('path');
var _ = require('lodash');
var RoutesApi = require('./routes').api;

var Port = 5555;

app.set('view engine','hbs');
app.set('views',Path.join(__dirname,'Views'));


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

app.listen(Port,function () {
    console.log('Listening On Port '+Port);
});
