$("#submit").on("click", function(){
  var $input = $("#string");
  if ($input.val().length > 0){
  firebase.database().ref().child("strings").push($input.val());
  $input.val("");
  }
});

$(document).ready(function(){
  var stringStorage = firebase.database().ref("strings");
  stringStorage.on("child_added", function(data){
    $("#string_list").append("<li>" + data.val() + "</li>")
  });
});
