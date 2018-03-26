var express = require("express");
var router = express.Router({ mergeParams: true });
var CampGroundmodel = require("../models/campground.js");
var likes = require("../models/likes.js");

router.get("/campgrounds/:id/likes/new",isLoggedIn, function(req, res) {
    CampGroundmodel.findById(req.params.id, function(err, foundcamp) {
        if (err) {
            console.log(err)
        }
        else {

            if (foundcamp.likesdata.length === 0) {
                var data = {
                    authordetails: {
                        username: req.user.username
                    }}
            //creating a like for user when array is empty //
            likes.create(data,function(err,createdlike){
                if(err){
                    console.log(err)
                }else{
                    createdlike.authordetails.id= req.user._id;
                    createdlike.save();
                    foundcamp.likesdata.push(createdlike._id);
                    foundcamp.save();
                    res.redirect("/campgrounds/"+req.params.id);
                }
            })        
            } else{
               var data = {
                   authordetails: {
                       username: req.user.username
                   }
               }
               //creating a like for user when array is empty //
               likes.create(data, function(err, createdlike) {
                           if (err) {
                               console.log(err)
                           }
                           else {
                               createdlike.authordetails.id = req.user._id;
                               createdlike.save();
                               foundcamp.likesdata.push(createdlike._id);
                               foundcamp.save();
                               res.redirect("/campgrounds/" + req.params.id);
                           }
            }) 
                
       }

        }
    })
})


// unlike route // 

router.get("/campgrounds/:id/unlikes/new",isLoggedIn,function(req, res) {
 var likeid = 0;
 CampGroundmodel.findById(req.params.id).populate("likesdata").exec(function(err,foundcamp){
       if(!err){
           foundcamp.likesdata.forEach(function(foundlikes){
               if(foundlikes.authordetails.id.equals(req.user._id)){
               likeid = foundlikes._id;    
               
                foundcamp.likesdata.splice(foundcamp.likesdata.indexOf(foundlikes),1);
                foundcamp.save();    
               
                likes.findByIdAndRemove(likeid,function(err){
                   console.log("remove")
               })
               res.redirect("/campgrounds/"+req.params.id);
                }
         })
           
       }else{
           req.flash("error","Not Found")
           res.redirect("/campgrounds");
       }
   });
 
 
})


function isLoggedIn(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }
     req.flash("error","Please Login First");
    res.redirect("/login");
}

module.exports = router;
