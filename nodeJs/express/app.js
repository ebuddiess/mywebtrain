var express = require("express")
var bodyparser = require("body-parser");
var path = require("path") // simplify file paths , its a core module so no need to isstall seperately
var expressvalidator = require("express-validator")
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/customerapp');
var Users = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number
});

var user = mongoose.model("users", Users);

var app = express();
// var logger = function(req, res, next) {
//     console.log("logging....")
//     next();
// }

// app.use(logger) // useing logger
app.use(bodyparser.json()); // for parsing json content
app.use(bodyparser.urlencoded({ extended: false }));
//set static path //
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")

// var student = {
//     name: "Puneet",
//     age: 21,
//     subjects: ["Maths", "JAVA", "WEB"],
//     City: "delhi"
// }

var data = [{
    id: 1,
    name: "Puneet",
    age: 21
}, {
    id: 2,
    name: "Asif",
    age: 21
}, {
    id: 3,
    name: "Manish",
    age: 21
}]

app.get("/", function(req, res) {
    res.render("index", {
        data: data
    })

})

app.post("/users/add", function(req, res) {
    var data = [{
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    }]


})


//======================================================================================================//
app.listen(3000, function() {
    console.log("Server started at 3000")
})