'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FoodMenuSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the food item'
  },
   type: {
    type: String,
    Required: 'Kindly enter the type of the food item'
  },
   price: {
    type: Number,
    Required: 'Kindly enter the price of the food item'
  },
});

module.exports = mongoose.model('FoodMenu', FoodMenuSchema);