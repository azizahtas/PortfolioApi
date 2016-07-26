var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LanguageSchema = new Schema({
    name : {type : String, required : true}
},{collection : 'Languages'});

var Language = module.exports = mongoose.model('Language',LanguageSchema,'Languages');

module.exports.getAllLanguages = function(callback){
    Language.find({},{_id:0},{},callback);
};
