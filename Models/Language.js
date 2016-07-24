var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LanguageSchema = new Schema({
    name : {type : String, required : true}
},{collection : 'Language'});

var Language = module.exports = mongoose.model('Language',LanguageSchema,'Language');

module.exports.getAllLanguages = function(callback){
    Language.find({},callback);
};
