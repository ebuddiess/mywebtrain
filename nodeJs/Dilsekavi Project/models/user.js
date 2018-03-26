var mongoose = require("mongoose");
var passportlocalmongoose = require("passport-local-mongoose");
// plugin for user model that have all the authntication function //

var UserSchema = new mongoose.Schema({
    email:String,
    password:String
})
UserSchema.plugin(passportlocalmongoose);
module.exports = mongoose.model("User",UserSchema);
