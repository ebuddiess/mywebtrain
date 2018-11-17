var fs = require("fs") // requing file system module
    // var read_string = fs.readFileSync('test.txt', 'utf8') //Synchronously read content of file
    // var read_string = fs.readFile('test.txt', 'utf8', function(err, data) {
    //     if (err)
    //         console.log(err);

//     console.log(data);
//     // this is in Asynchronous mode where nodejs run other code and dont wait for file to be read first then execute 
//     // other code ..
// })

// fs.writeFileSync("test2.txt", read_string); // write to file syncrhnously

// fs.unlink("test2.txt", function(err) {
//     if (err)
//         console.log(err);
// })

// fs.mkdirSync("node") // make directory//
// fs.rmdirSync("node") // remove directory//

// fs.mkdir("node", function() {
//     fs.writeFile("./node/nodexample.txt", "a node example")
// })