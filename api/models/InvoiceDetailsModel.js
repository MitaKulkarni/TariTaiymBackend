'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FoodMenuSchema = new Schema({
  phoneNo: {
    type: Number,
    Required: 'Please send the number of the user'
  },
   total: {
    type: Number,
    Required: 'Please send the total amount'
  },
   invoice: {
    type: String,
    Required: 'Please send the invoice details'
  },
   subscribe: {
    type: Boolean,
    Required: 'Please send the subscribtion info'
  },
});

module.exports = mongoose.model('Invoices', FoodMenuSchema);