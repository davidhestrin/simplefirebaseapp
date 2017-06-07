$("#submit").on("click", function(){
  var $input = $("#book_title");
  if ($input.val().length > 0){
  firebase.database().ref().child("books").child(0).set($input.val());
  $input.val("");
  setTimeout(function(){
    $input.attr("placeholder","Submit another book NOW");

  }, 500)
} else{
  alert("put a book title!")
};
});

$(document).ready(function(){
  var booksReference = firebase.database().ref("books");
  booksReference.on("child_added", function(data){
    $("#book_list").append("<li>" + data.val() + "</li>")
  });
});
