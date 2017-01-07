var socket = io();
var shift = 0;
var user_id = "";

socket.on('user_count', function(msg) {
 $('#status').text(msg); 
 user_id = msg;
});



$(document).keydown(function(e){
  if (e.keyCode == 37) { 
    console.log("left pressed");
    shift -= 10;
    $('#player' + user_id + ' > img').css("left", shift.toString() + "px")
    return false;
  } else if (e.keyCode == 39) {
    console.log("right pressed");
    shift += 10;
    $('#player' + user_id + ' > img').css("left", shift.toString() + "px")
    return false;
  }
});
