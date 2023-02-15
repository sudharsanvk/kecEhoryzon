var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
const schema = mongoose.Schema;

const userschema = schema({
    username:String,
    password:String
})

userschema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users',userschema)