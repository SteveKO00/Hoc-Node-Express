const express = require('express');
var userRoute = require('./routes/userRoute.js');
var bodyParser = require('body-parser');
const port = 8000;
const hostname = 123;

var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/',function(req,res){
  res.render('index.pug', {
    name: 'AA'
  });
});
app.use('/users', userRoute);

app.listen(port, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});


