$("#submit").on("click", function(){
  var $input = $("#string");
  if ($input.val().length > 0){
  firebase.database().ref().child("strings").push($input.val());
  $input.val("");
  }
});

$(document).ready(function(){
  var moviesReference = firebase.database().ref("strings");
  moviesReference.on("child_added", function(data){
    $("#strings").append("<li>" + data.val() + "</li>")
  });
});
