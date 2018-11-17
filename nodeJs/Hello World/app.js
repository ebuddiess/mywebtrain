var http = require("http") // requring http module which is an built in module //

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': "text/plain"
    });
    res.end("Hello World");
}).listen(3000); // this will be the port on which your server will run
console.log("Server Started Sucessfully");