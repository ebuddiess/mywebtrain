var app = require("express")();
var http = require("http").Server(app)
var fs = require('fs');
fileSystem = require('fs'),

    app.get("/", function(req, res) {
        res.sendFile(__dirname + "/index.html")
    })

app.get("/song.mp3", (req, res) => {
    var filePath = 'song.mp4';
    var stat = fileSystem.statSync(filePath);

    res.writeHead(200, {
        'response': "success",
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size
    });

    var stream = fs.createReadStream('song.mp4');
    stream.pipe(res)


});





//===========================================================================================================//
http.listen(3000, function() {
    console.log("Server created on 3000")
})