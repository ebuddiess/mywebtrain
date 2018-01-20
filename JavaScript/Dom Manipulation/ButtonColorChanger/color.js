var body= document.querySelector("body");
var button = document.getElementById("btn");
var color = false;
function change(){
if(color){
body.style.background="white";
} else{
body.style.background="purple";
}
color=!color;
}

button.addEventListener("click",change);
