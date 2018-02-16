var even = document.querySelectorAll(".even");
var odd = document.querySelectorAll(".odd");
var score = document.querySelector("h1");
var count = 0;
for (var i = 0; i < even.length; i++) {
    even[i].addEventListener("click", function() {
        this.classList.toggle("eventoggle");
        this.style.background = randomcolormake();
        count++;
        score.textContent = "Score :" + count;
    });
}

for (var i = 0; i < odd.length; i++) {
    odd[i].addEventListener("click", function() {
        this.classList.toggle("oddtoggle");
        this.style.background = randomcolormake();
        count++;
        score.textContent = "Score :" + count;
    });
}

function randomcolormake() {
    //pick a red from 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 -255
    var g = Math.floor(Math.random() * 256)
        //pick a blue from 0 -255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}