var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/home', function(req, res){
    res.send('This is the Home page');
})

app.listen(3000);
console.log('Started');
