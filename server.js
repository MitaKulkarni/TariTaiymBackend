var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  FoodMenu = require('./api/models/FoodMenuModel'),
  Invoices = require('./api/models/InvoiceDetailsModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Mita:mita2017@ds157040.mlab.com:57040/heroku_59jwr7vq', {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var foodMenuroutes = require('./api/routes/FoodMenuRoutes');
foodMenuroutes(app);

var invoicesRoutes = require('./api/routes/InvoicesRoutes');
invoicesRoutes(app);

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

console.log('tari & taiym RESTful API server started on: ' + port);
