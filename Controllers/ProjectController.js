var express = require('express');
var ProjectRouter = express.Router();
var Project = require('../Models/Project');

ProjectRouter.use('*',function (req, res, next) {
    console.log('Inside Project Controller!');
    next();
});

//All Routes with /
ProjectRouter
    .get('/',function (req, res) {
        Project.getAllProjects(function (err,Projects) {
            if(err){console.log('Error :'+err); res.json({'status': 'Error', 'msg' : 'Error Retriving All Projects!'});}
            res.json(Projects);
        });
    })
    .post('/',function (req, res) {
        var Proj = req.body;

        Project.addProject(Proj,function (err, Project) {
            if(err){
                console.log('Error Saving Project :'+err);
                res.json({'status': 'Error', 'msg' : 'Error Saving Project!'});
            }
            res.json({'status': 'Success', 'msg' : 'Saved Successfully'});
        });
    });

//All Routes with /:id
ProjectRouter
    .get('/:_id',function (req, res) {
        var id = req.param('_id');
        Project.getProjectById(id,function (err,data) {
            if(err){console.log('Error :'+err); res.json({'status': 'Error', 'msg' : 'Error Selecting Project with Id : '+id});}
            res.json(data);
        });
    })
    .put('/:_id',function (req, res) {
        var id = req.param('_id');
        var rec_proj = req.body;
        Project.UpdateProject(id,rec_proj,function (err,Project) {
            if(err){console.log('Error :'+err); res.json({'status': 'Error', 'msg' : 'Error Editing Project with Id : '+id});}
            res.json({'status': 'Success', 'msg' : 'Updated Successfully'});
        });
    });

module.exports = ProjectRouter;
