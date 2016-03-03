var http = require('http');
module.exports = {
  port:55555,
  init:function(app,http){
      console.log("Init...");
      app.get('/hello', function (req, res) {
          res.send("Backend");
      });
  }
}
