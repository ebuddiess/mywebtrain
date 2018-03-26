var mongoose = require("mongoose");

//Schema Setup 
var likesSchema = new mongoose.Schema({
    authordetails:{
        id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
      },
      username:String
    }
});
// Making model with schema 
module.exports = mongoose.model("likes",likesSchema);