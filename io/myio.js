module.exports = function(app) {
  app.users = 0;
  app.io.on('connection', function(socket){
    app.users++;
    console.log('a user connected\nnumber of users: ' + app.users);
    socket.on('disconnect', function(){
      app.users--;
      console.log('a user disconnected\nnumber of users: ' + app.users);
    });
  });
}