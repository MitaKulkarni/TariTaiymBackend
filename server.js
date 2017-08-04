var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  FoodMenu = require('./api/models/FoodMenuModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Mita:mita2017@ds135983.mlab.com:35983/heroku_k206kh0q'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/foodMenuRoutes');
routes(app);


app.listen(port);

console.log('tari & taiym RESTful API server started on: ' + port);
