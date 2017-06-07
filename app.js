$("#submit").on("click", function(){
  var $input = $("#movie_title");
  if ($input.val().length > 0){
  firebase.database().ref().child("movies").push($input.val());
  $input.val("");
  }
});

$(document).ready(function(){
  var moviesReference = firebase.database().ref("movies");
  moviesReference.on("child_added", function(data){
    $("#movie_list").append("<li>" + data.val() + "</li>")
  });
});
