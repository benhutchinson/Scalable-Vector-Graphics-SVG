var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

// app.use(express.static(__dirname + './public'));

// app.use(express.static(__dirname + './doc'));

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('ben');
});

server.listen(3000, function(){
  console.log("Server listening");
});

module.exports = server;
