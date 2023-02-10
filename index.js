const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/userRoute.js');
var authRoute = require('./routes/authRoute.js');

const authMiddleware = require('./middlewares/authMiddleware.js');

const port = 8000;
const hostname = 123;

var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('dviav6565a6'));

app.get('/',function(req,res){
  res.render('index.pug', {
    name: 'AA'
  });
});
app.use('/auth', authRoute);
app.use('/users', authMiddleware.requireAuth, userRoute);

app.listen(port, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});


