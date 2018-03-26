var express = require("express");
var router = express.Router({mergeParams: true});
var CampGroundmodel     = require("../models/campground.js");
var Comment             = require("../models/comment.js");

// ================================================================================================================================================
//                                                                       COMMENTS ROUTES STARTED
// ===============================================================================================================================================

router.get("/campgrounds/:id/comments/new",isLoggedIn,function(req,res){
    var camp_id = "" ;
    camp_id = req.params.id;
    
    CampGroundmodel.findById(camp_id,function(err,foundcamp){
        if(err){
        console.log(err);
        req.flash("error","Not Found")
            
        }
    res.render("comments/new",{campground:foundcamp});
  
    })
});

// comment post route //
router.post("/campgrounds/:id/comments",isLoggedIn,function(req,res){
   //lookup campground  using id 
  CampGroundmodel.findById(req.params.id,function(err, foundcamp) {
    if(err){
        console.log(err);
        req.flash("error","Not Found")
        res.redirect("/campgrounds");
    }else{
        Comment.create(req.body.comment,function(err,comment){
            if(err){
                req.flash('error',"Page Not Found");
                console.log(err);
            }else{
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
            comment.save();
            foundcamp.comments.push(comment._id);
            foundcamp.save();
            req.flash("success","Comment Created Sucesfully");
            res.redirect("/campgrounds/"+foundcamp._id);
            }
        })
    }  
  })
});
//-----------------COMMENT EDIT ----------------------------------
router.get("/campgrounds/:id/comments/:comment_id/edit",checkCommentOwnership,function(req,res){
    var camp_id = "" ;
    camp_id = req.params.id;
    Comment.findById(req.params.comment_id,function(err, foundComment) {
        if(err){
            req.flash("error","Oops ! something went wrong")
            res.redirect("back")
        }else{
          req.flash("success","Comment Edited Sucessfully");
             res.render("comments/edit",{campground_id:camp_id,comment:foundComment});
        }
    })
   
  
    })

router.put("/campgrounds/:id/comments/:comment_id",checkCommentOwnership,function(req,res){
    Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,updatecomment){
        if(err){
            req.flash("error","Not Found")
            res.redirect("back");
        }else{
            req.flash("success","Updated Sucesfully");
            res.redirect("/campgrounds/"+req.params.id);
        }
    })
})

router.delete("/campgrounds/:id/comments/:comment_id",checkCommentOwnership,function(req,res){
   Comment.findByIdAndRemove(req.params.comment_id,function(err){
       if(err){
           req.flash("error","Not Found")
           res.redirect("back");
       }else{
           req.flash("success","Deleted Sucesfully");
           res.redirect("/campgrounds/"+req.params.id);
       }
   }) 
});
function isLoggedIn(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }
     req.flash("error","Please Login First");
    res.redirect("/login");
}

function checkCommentOwnership(req,res,next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id,function(err, foundcomment) {
            if(err){
                req.flash("error","Post Not found !");
                res.redirect("back")
            }else{
                if(foundcomment.author.id.equals(req.user._id)){
                next();
            }else{
                req.flash("error","Permission Denied By Author");
                res.redirect("back")
            }
            }                                                                               
        })
    }else{
        req.flash("error","Please Login First");
        res.redirect("back");
    }
}
module.exports = router;