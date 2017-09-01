'use strict';


var mongoose = require('mongoose'),
  Invoices = mongoose.model('Invoices');

exports.list_all_items = function(req, res) {
  Invoices.find({}, function(err, invoices) {
    if (err)
      res.send(err);
    res.json(invoices);
  });
};

exports.create_a_item = function(req, res) {
  var new_item = new Invoices(req.body);
  new_item.save(function(err, invoices) {
    if (err)
      res.send(err);
    res.json(invoices);
  });
};
