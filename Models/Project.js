var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name : {type : String, required : true },
    description : {type : String, required: true },
    language : {type : String, required: true },
    video_url : {type : String, required: true },
    images : [{
        url :{type : String, required: true },
        caption :{type : String}
    }
        ],
    details : [
        {
            param: {type: String, required: true},
            value: {type: String, required: true}
        }
    ]
},{collection : 'Projects'});

var Project = module.exports = mongoose.model('Project',ProjectSchema,'Projects');

module.exports.getAllProjects = function(callback){
    Project.find({},{video_url : 0, details : 0},{},callback);
};

module.exports.getProjectById = function(Id,callback){
    Project.findById(Id,{},{},callback);
};

module.exports.addProject = function(project,callback){
    var newProject = new Project(project);
    newProject.save(callback);
};

module.exports.UpdateProject = function(Id,project,callback){
    Project.findByIdAndUpdate(Id,project,{},callback);
};

