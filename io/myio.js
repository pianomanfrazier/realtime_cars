module.exports = function(app) {
  app.users = 0;
  app.cars = [0,0,0,0];
  app.io.on('connection', function(socket){
    app.users++;
    socket.emit('user_count', app.users);
    app.io.sockets.emit('update_cars',app.cars);
    console.log('a user connected\nnumber of users: ' + app.users);

    socket.on('disconnect', function(){
      app.users--;
      socket.emit('user_count', app.users);
      console.log('a user disconnected\nnumber of users: ' + app.users);
    });

    socket.on('move_car', function(msg) {
      console.log(msg); 
      var shift = parseInt(msg.shift);
      var id = parseInt(msg.id);
      app.cars[id - 1] = shift;
      console.log(app.cars);
      app.io.sockets.emit('update_cars',app.cars);
    });

  });
}
