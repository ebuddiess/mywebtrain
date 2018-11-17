var http = require("http")
var hello = require("./hello.js")

var inHindi = hello.sayHelloinHindi
var InEnglish = hello.sayHelloinEnglish

console.log(inHindi())
console.log(InEnglish())