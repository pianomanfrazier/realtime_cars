var socket = io();
var shift = 0;
var user_id = "";

$(document).ready(function() {
  socket.emit('get_update'); 
});

socket.on('user_count', function(msg) {
 $('#status').text(msg); 
 user_id = msg;
});

socket.on('update_cars', function(msg) {
  console.log('update cars');
  for (i = 1; i <= 4; i++) {
    $('#player' + i + ' > img').css("left", msg[i - 1] + "px");
    console.log(msg[i-1].toString());
  }
});

$(document).keydown(function(e){
  if (e.keyCode == 37) { 
    console.log("left pressed");
    shift -= 10;
    socket.emit('move_car', { "id" : user_id , "shift" : shift });
    return false;
  } else if (e.keyCode == 39) {
    console.log("right pressed");
    shift += 10;
    socket.emit('move_car', { "id" : user_id , "shift" : shift });
    return false;
  }
});
