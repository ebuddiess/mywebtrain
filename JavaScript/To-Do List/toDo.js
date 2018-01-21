var lis = document.querySelectorAll("li");
for(var i =0;i<lis.length;i++){
// code for mouseover
lis[i].addEventListener("mouseover", function(){
this.classList.add("selected");
});
// code for  mouse out
lis[i].addEventListener("mouseout", function(){
this.classList.remove("selected");
});

lis[i].addEventListener("click", function(){
this.classList.toggle("done");
});
}
