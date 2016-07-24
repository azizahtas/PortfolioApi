var express = require('express');
var LanguageRouter = express.Router();
var Language = require('../Models/Language');

LanguageRouter.use('*',function (req, res, next) {
    console.log('Inside language Controller!');
    next();
});

//All Routes with /
LanguageRouter
    .get('/',function (req, res) {
        Language.getAllLanguages(function (err,Languages) {
            if(err){console.log('Error :'+err);}
            res.json(Languages);
        });
    });

//All Routes with /:id
exports.module = LanguageRouter;
