var numofsquare =6;
var colors = generate(numofsquare);
var pickedcolor = pickColor();
var messagedisplay = document.getElementById("message");
var squares=document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colordisplay= document.getElementById("colordisplay");
var newcolor = document.querySelector("#newcolor");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
colordisplay.textContent=pickedcolor;
// easybutton event listner
easycodelistner();
function easycodelistner(){
  easy.addEventListener("click",function(){
  easy.classList.add("selected");
  numofsquare=3;
  h1.style.backgroundColor="#232323";
  hard.classList.remove("selected");
  // generating new 3 color
  colors=generate(numofsquare);
  // pick new color
  pickedcolor=pickColor();
  // change colorDisplay to Match Picked Color
  colordisplay.textContent=pickedcolor;
  // code for channging color for first 3 square
  for(var i = 0;i<=2;i++)
  {
  squares[i].style.background= colors[i];
  }
  // code for hiding other squares
  for(var i =3;i<=5;i++)
  {
  squares[i].style.display = "none";
  }
  });
}
// hard button event listner
hardcodelistner();
function hardcodelistner(){
  hard.addEventListener("click",function(){
  hard.classList.add("selected");
  numofsquare=6;
  easy.classList.remove("selected");
  h1.style.backgroundColor="#232323";
  // generating new 3 color
  colors=generate(numofsquare);
  // pick new color
  pickedcolor=pickColor();
  // change colorDisplay to Match Picked Color
  colordisplay.textContent=pickedcolor;
  // code for channging color for first 3 square
  for(var i = 0; i<squares.length;i++)
  {
   squares[i].style.background =colors[i];
   squares[i].style.display = "block";
  }
  });
}
// code for assigning new color on button click
newcodelistner();
function newcodelistner(){
  newcolor.addEventListener("click",function()
  {
  // generate all new color
  colors=generate(numofsquare);
  // pick new color
  pickedcolor=pickColor();
  // change colorDisplay to Match Picked Color
  colordisplay.textContent=pickedcolor;
  // change color of square
  for(var i = 0;i<squares.length;i++){
  squares[i].style.backgroundColor= colors[i];
  }
  messagedisplay.textContent="";
  newcolor.textContent="New Colors";
  h1.style.backgroundColor="#232323";
  }
  );
}
// checking if clicked color matched to pickedcolor
for(var i =0;i<squares.length;i++){
// add colors to squares
squares[i].style.backgroundColor = colors[i];
// add click listner to square
squares[i].addEventListener("click", function() {
// grab color of clicked square
var clickedcolor = this.style.backgroundColor;
// compare color of picked color
if(clickedcolor===pickedcolor){
messagedisplay.textContent="Correct";
newcolor.textContent="Play Again";
changeColors(clickedcolor);
h1.style.background=clickedcolor;
}
else {
this.style.background="#232323";
messagedisplay.textContent="Try Again"
}
});
}

// function of changing color of all div when right color get guessed
function changeColors(colors){
// loop through all squares
for(var i=0;i<squares.length;i++){
// add colors to squares
squares[i].style.backgroundColor=colors;
// change each color to match given color
}
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generate(num){
// make an array
var arr=[];
// add num random color to array
for(var i =0 ;i<num;i++){
// get random color and push into array
 arr.push(randomcolormake());
}
// return that array
return arr;
}
// generate randomcolor
function randomcolormake(){
//pick a red from 0 -255
var r = Math.floor(Math.random() * 256);
//pick a green from 0 -255
var g = Math.floor(Math.random() * 256)
//pick a blue from 0 -255
var b = Math.floor(Math.random() * 256)
return "rgb(" + r + ", " + g + ", " + b + ")";
}
