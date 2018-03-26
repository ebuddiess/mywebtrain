var express = require("express");
var router = express.Router();
var CampGroundmodel     = require("../models/campground.js");
var Comment             = require("../models/comment.js");


var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'ebuddiess', 
  api_key:process.env.APIKEY, 
  api_secret:process.env.APISECRET
});


// route for adding new campground --- goes to forum page //
router.get("/campgrounds/new",isLoggedIn,function(req,res){
    res.render("campgrounds/new");
});

//rote for showing all campgrounds //
router.get("/campgrounds",function(req,res){
    // get all campgrounds from database
    CampGroundmodel.find({},function(err,allcampgrounds){
        if(err){
            console.log("Error Occured");
            req.flash("error","Not Found")
        }else{
         res.render("campgrounds/index",{campgrounds:allcampgrounds});     
        }
    });
});

//ROUTE FOR POST REQ //
router.post("/campgrounds",isLoggedIn, upload.single('image'), function(req, res) {
 cloudinary.uploader.upload(req.file.path, function(result) {
  // add cloudinary url for the image to the campground object under image property
  req.body.campground.image = result.secure_url;
  // add author to campground
  req.body.campground.author = {
    id: req.user._id,
    username: req.user.username
  }
  CampGroundmodel.create(req.body.campground, function(err, campground) {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('back');
    }
    res.redirect('/campgrounds/' + campground.id);
  });
});
});
// showing invidual campgrounds more info
router.get("/campgrounds/:id",function(req,res){
    // find campground with provided id
   CampGroundmodel.findById(req.params.id).populate("comments").populate("likesdata").exec(function(err,foundcamp){
       if(!err){
           res.render("campgrounds/show",{icampground:foundcamp});
       }else{
           req.flash("error","Not Found")
           res.redirect("/campgrounds");
       }
   });
    // render show template with that campground
});

//------------------------------------------------EDIT ROUTE ---------------------------------------
router.get("/campgrounds/:id/edit",checkCampgroundOwnership,function(req, res) {
    CampGroundmodel.findById(req.params.id,function(err,foundcamp){
        if(err){
            req.flash("error","Something wrong happen , Not Found !!")
            res.redirect("/campgrounds");
        }else{
               res.render('campgrounds/edit',{campground:foundcamp});
        }
    });
})
// ----------------------------UPDATE ROUTE ----------------------------------------------------------
router.put("/campgrounds/:id",checkCampgroundOwnership,upload.single('image'),function(req, res) {
    //find and update correct campground //
    CampGroundmodel.findById(req.params.id,function(err,foundcamp){
        if(err){
            req.flash("error","Post Not Found");
            res.redirect("/campgrounds");
        }else{
            
            cloudinary.uploader.upload(req.file.path, function(result) {
                
  // add cloudinary url for the image to the campground object under image property
  req.body.campground.image = result.secure_url;
  // add author to campground
  req.body.campground.author = {
    id: req.user._id,
    username: req.user.username
  }
  CampGroundmodel.findByIdAndUpdate(req.params.id,req.body.campground, function(err, campground) {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('back');
    }
    res.redirect('/campgrounds/' + campground.id);
  });
});
            
            
            
            //   CampGroundmodel.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updatedcampground){
            //       if(err){
            //           req.flash("error","Not Found")
            //           res.redirect("/campgrounds");
            //       }else{
            //           req.flash("success","Updated Sucessfully");
            //           res.redirect("/campgrounds/"+req.params.id);
            //       }
            //   });
               
        }
    });
})

//-------------------------DELETE --------------------------//
router.delete("/campgrounds/:id",checkCampgroundOwnership,function(req,res){
    CampGroundmodel.findByIdAndRemove(req.params.id,function(err){
        if(err){
            req.flash("error","Not Found")
        res.redirect("/campgrounds");
        }else{
            req.flash("success","Deleted Sucessfully");
            res.redirect("/campgrounds");
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

function checkCampgroundOwnership(req,res,next){
    if(req.isAuthenticated()){
        CampGroundmodel.findById(req.params.id,function(err, foundcamp) {
            if(err){
                req.flash("error","Not Found !")
                res.redirect("back")
            }else{
                //does user own campground
                if(foundcamp.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error","Permission Denied By Author");
                    res.redirect("back");
                }
            }
        })
    }else{
        req.flash("error","Please Login First");
        res.redirect("back");
    }
}
module.exports = router;