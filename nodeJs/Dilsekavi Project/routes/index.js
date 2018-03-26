var express = require("express");
var router = express.Router();
var User    =require("../models/user.js");
var passport    = require("passport");
//=====================================AUTHENTICATION======REGISTER ROUTES===================================================//
router.get("/register",function(req, res) {
    res.render("register");
})

router.post("/register",function(req, res) {//user .regitser method is give by password local mongoose //
  var newuser = new User({username:req.body.username});
 
  User.register(newuser,req.body.password,function(err,user){
      if(err){
        
          req.flash("error",err.message)
          return res.redirect("/register");
      }
      passport.authenticate("local")(req,res,function(){
         req.flash("success","Welcome to dilSeKavi "+user.username);
         
          res.redirect("/campgrounds");
      })
  })
})


//=================================================LOGIN ROUTES=======================================//

router.get("/login",function(req, res) {
    res.render("login");
})

router.post("/login",passport.authenticate("local",{
    failureRedirect:"/login",
    sucessRedirect:"/campgrounds"
   
}),function(req, res) {
     req.flash("success","Login Succesfully "+req.body.username);
    res.redirect("/campgrounds");
});

router.get("/logout",function(req, res) {
req.logout(); 
req.flash("success","Log Out Sucesfully");
res.redirect("/campgrounds");
})


function isLoggedIn(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }
    req.flash("error","Please Login First");
    res.redirect("/login");
}

module.exports = router;