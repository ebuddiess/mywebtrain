var app = require("express")();
var http = require("http").Server(app)
var io = require("socket.io")(http) // we have to pass server object in io before using it //
var users = []
var connections = []
    // we have to make connections //

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

io.sockets.on("connection", function(socket) {
    connections.push(socket)
    console.log("Connected Sockets are : " + connections.length);

    socket.on("disconnect", function(socket) {

        users.splice(users.indexOf(socket.username), 1);
        updateusernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log("User Disconnected , Active User Remaing :" + connections.length);
    })

    socket.on("send message", function(data) {
        io.sockets.emit("new message", { msg: data, user: socket.username })
    })

    socket.on("new user", function(data, callback) {
        callback(true);
        socket.username = data;
        users.push(socket.username)
        updateusernames();
    })

    function updateusernames() {
        io.sockets.emit("get users", users)
    }
})

//===========================================================================================================//
http.listen(process.env.PORT, function() {
    console.log("Server created on 3000")
})