var home = $(".home");
var events = $(".events");
var rules = $(".rules");
var register = $(".register");
var contact = $(".contacts");
var credit = $(".credits");
var p = $("p");
home.on("click", function() {
    window.location.href = 'Home.html';
})

register.on("click", function() {
    window.location.href = 'register.html';
})
events.on("click", function() {
    window.location.href = 'events.html';
})
setTimeout(function() {
    p.addClass("animated bounceInLeft")
}, 1000)

setTimeout(function() {
    $("button").addClass("animated bounce")
}, 2000)