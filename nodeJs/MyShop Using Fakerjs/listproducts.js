var faker = require('faker');

console.log("Welcome To My Shop");
console.log("============================================");
for(var i=0;i<10;i++){
var proname = faker.commerce.productName();
var price = faker.commerce.price();
console.log(proname + "-" + price);
}