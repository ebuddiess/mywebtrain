var mongoose = require("mongoose");

//Schema Setup 
var campgroundsSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    author:{
     id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
     },
     username:String
    },
    comments: [
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
       }
        ],
    likesdata: [
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: "likes"
       }
        ]
});
// Making model with schema 
module.exports = mongoose.model("Campground",campgroundsSchema);