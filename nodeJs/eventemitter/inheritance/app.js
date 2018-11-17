var events = require("events")
var util = require("util")

var student = function(name) {
    this.name = name;
}

util.inherits(student, events.EventEmitter); // inheriting all function of event emiiter in student //

var Puneet = new student("Puneet")
Puneet.on("scored", function(marks) {
    console.log(marks + " marks of " + Puneet.name)
})

Puneet.emit("scored", 90)