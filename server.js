var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('ben');
});

app.get('/2', function(req, res){
  res.render('ben2');
});

app.get('/mdn_tutorial', function(req, res){
  res.render('mdn_tutorial');
});

server.listen(3000, function(){
  console.log("Server listening");
});

module.exports = server;
