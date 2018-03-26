
var like = document.querySelectorAll("#like")
if(document.getElementById("unlike")==null){
    
    for(var i=0;i<like.length-1;i++){
    like[i].style.display = "none" }
    
    
} else {
    document.querySelectorAll("#like").forEach(function(like){
    like.style.display = "none" })
}
