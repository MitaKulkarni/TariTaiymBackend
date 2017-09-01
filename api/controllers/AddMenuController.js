'use strict';


var mongoose = require('mongoose'),
  FoodMenu = mongoose.model('FoodMenu');

exports.list_all_items = function(req, res) {
  FoodMenu.find({}, function(err, food_item) {
    if (err)
      res.send(err);
    res.json(food_item);
  });
};

exports.create_a_item = function(req, res) {
  var new_item = new FoodMenu(req.body);
  new_item.save(function(err, food_item) {
    if (err)
      res.send(err);
    res.json(food_item);
  });
};

exports.find_item = function(req, res) {
  FoodMenu.findById(req.params.itemId, function(err, food_item) {
    if (err)
      res.send(err);
    res.json(food_item);
  });
};


exports.update_item = function(req, res) {
  FoodMenu.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, food_item) {
    if (err)
      res.send(err);
    res.json(food_item);
  });
};


exports.delete_item = function(req, res) {
  FoodMenu.remove({
    _id: req.params.itemId
  }, function(err, food_item) {
    if (err)
      res.send(err);
    res.json({ message: 'Food item successfully deleted' });
  });
};

