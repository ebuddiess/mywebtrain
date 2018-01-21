var p1btn = document.querySelector(" #p1 "); /* Varibale Declaration */
var p2btn = document.querySelector(" #p2 "); /* Varibale Declaration */
var p1score=0;
var p2score=0;
var turn =document.querySelector("#turn");
var reset = document.getElementById("reset");
var p1display = document.querySelector(" #p1display ");
var p2display = document.querySelector(" #p2display ");
var gameover = false;
var winscore = 5;
var numinput = document.querySelector("input");
// funcion for updating score for player 1
p1btn.addEventListener("click",function(){
if(!gameover)
{
  p1score++;
 if(p1score===winscore){
p1display.classList.add("winner");
gameover=true;
}
  p1display.textContent=p1score;
}
});
// funcion for updating score for player 2
p2btn.addEventListener("click",function(){
  if(!gameover)
  {
    p2score++;
   if(p2score===winscore){
  p2display.classList.add("winner");
   gameover=true;
  }
    p2display.textContent=p2score;
  }
});
// reset button code
function resetall(){
gameover = false;
p1display.classList.remove("winner");
p2display.classList.remove("winner");
p1display.textContent="0";
p2display.textContent="0";
p1score=0;
p2score=0;
}
reset.addEventListener("click",resetall);
numinput.addEventListener("change",function(){
turn.textContent=numinput.value; /* Getting value of input field and updating to span inside paragraph */
winscore = Number(numinput.value);
resetall();
});
