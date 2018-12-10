const express   = require('express'),
	  app  = express(),
      http = require('http').Server(app),
	  port = 8888;
	  
app.use(express.static('src'));


app.listen(port, function(){
  console.log('listening on *:'+port);
});
