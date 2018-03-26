var express                  = require("express");
var app                      = express();
var mongoose                 = require("mongoose");
var seedDb                   = require("./seeds");
var CampGroundmodel          = require("./models/campground.js");
var Comment                  = require("./models/comment.js");
var likes                  = require("./models/likes.js");
var passport                 = require("passport");
var LocalStrategy            =require("passport-local");
var User                     =require("./models/user.js");
var flash                    =require("connect-flash");
//=====================================INCLUDING FILES OF ROUTING====================================//
var commentsRoutes    = require("./routes/comments");
var campgroundsRoutes = require("./routes/campgrounds");
var indexRoutes       = require("./routes/index");
var likesRoutes       = require("./routes/likes");
var methodOverride    = require("method-override");
//==================================================================//
// seedDb();
//=======================PASSPORT CONFIGURATION========================================//
app.use(flash())
app.use(require("express-session")({
    secret:"ILIVEINYOURHEART",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
      res.locals.currentUser = req.user;
      res.locals.error = req.flash("error");
      res.locals.success = req.flash("success");
      
      next();
});

app.use(methodOverride("_method"));
//=================================================================//
// mongoose.connect("mongodb://localhost:/yelp");
mongoose.connect("mongodb://ebuddiess:3xnmminus5@ds121299.mlab.com:21299/dilsekavi");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true})); // using body-parser
app.set("view engine","ejs"); //setting view engine to ejs //
app.use(express.static(__dirname+"/public"));
//route for landing page //
app.get("/",function(req,res){
    res.render("home");
});

app.use(indexRoutes);
app.use(campgroundsRoutes);
app.use(commentsRoutes);
app.use(likesRoutes);
//starting server //
app.listen(process.env.PORT,process.env.IP,function(){
   console.log(" Yelpcamp Server Started Sucessfuly"); 
});