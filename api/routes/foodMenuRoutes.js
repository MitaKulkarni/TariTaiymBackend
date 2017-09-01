'use strict';
module.exports = function(app) {
  var menu = require('../controllers/AddMenuController');


  // menu Routes
  app.route('/api/v1/foodmenu')
    .get(menu.list_all_items)
    .post(menu.create_a_item);


  app.route('/api/v1/foodmenu/:itemId')
    .get(menu.find_item)
    .put(menu.update_item)
    .delete(menu.delete_item);
};