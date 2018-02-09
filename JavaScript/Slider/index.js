var images = [{
    path: "asset/1.jpg"
}, {
    path: "asset/2.jpg"
}, {
    path: "asset/3.jpg"
}, {
    path: "asset/4.jpg"
}, {
    path: "asset/5.jpg"
}, {
    path: "asset/6.jpg"
}, {
    path: "asset/7.jpg"
}, {
    path: "asset/8.jpg"
}];
var now = 0;
var a = document.querySelectorAll("a");
var img = document.querySelector("img");
for (i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function() {
        console.log(now);
        img.setAttribute("src", images[now++].path);
        img.classList.toggle("fade");
        if (now === 8) {
            now = 0;
        }
    });
}

function change() {
    img.setAttribute("src", images[now++].path);
    if (now === 8) {
        now = 0;
    }
}
setInterval(change, 2000);