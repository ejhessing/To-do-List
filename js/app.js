//create new to dos
$("input[type='text'").keypress(function(evt){
  //check if enter key is pressed
  if(evt.which === 13){
    //grab the new to do from input
    var newToDo = $(this).val()
    //clears the input text box
    $(this).val("");
    //create a new li and add the text
    $("ul").append("<li><i class='fa fa-trash' aria-hidden='true'></i> " + newToDo + "</li>");
  }
});


//Check off Specific todos By Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});



// Click on X to Delete
$("ul").on("click", "span", function(evt){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    evt.stopPropagation();
})