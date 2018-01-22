// checkoff specific todo by clicking by toggling the class .complete created in css
$("ul").on("click","li",function() { // we are adding lister on ul instead of li bcoz it will keep track of all li inside
$(this).toggleClass("completed");    //ul and update them ....so futer li will still work
}); // in case of only i it will work to existing li only

//click on X to Delete Todo X is in A span
$("ul").on("click","span",function() {
$(this).parent().fadeOut(500,
function(){
$(this).remove();
}
); //removing parent li not only span
event.stopPropagation(); //stopping event bubbling
});

$("input[type='text']").keypress(function(event) {
  /* Act on the event */
if(event.which===13)
{
var todotext = $(this).val(); //grabing value of input-text into variable
// clearing input-text
$(this).val("");
// creating a new li and add to ul
$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todotext+"</li>"); //apending all elemnts on last of li
}
});

$(".fa-pencil-square-o").click(function() {
  /* Act on the event */
$("input[type='text']").fadeToggle("100");
});
