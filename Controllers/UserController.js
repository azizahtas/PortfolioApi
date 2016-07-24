var express = require('express');
var UserRouter = express.Router();

UserRouter.use('*',function (req,res,next) {
    console.log('Inside UserController MiddleWare');
    next();
});

//Routes with /user url
UserRouter
    .get('/',function (req,res) {
        res.send('Return User Json Object');
    });
module.exports = UserRouter;
