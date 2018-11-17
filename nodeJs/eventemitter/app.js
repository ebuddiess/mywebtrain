var events = require("events")
    // we have to create instance fo event emitter for use event emitter //

var eventEmitter = new events.EventEmitter();

// we can make listener for an event and that listener will listen for taht event //

eventEmitter.on("clicked", function(button) { // handling event here
    console.log("Someone clicked " + button);
})

eventEmitter.emit("clicked", "button One") // means that event is triggered and handled by above code 
    // the second argument will be passed to handler function as an argument //