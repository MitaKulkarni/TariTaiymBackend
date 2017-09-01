'use strict';
module.exports = function(app) {
  var menu = require('../controllers/addMenuController');


  // menu Routes
  app.route('/foodmenu')
    .get(menu.list_all_items)
    .post(menu.create_a_item);


  app.route('/foodmenu/:itemId')
    .get(menu.find_item)
    .put(menu.update_item)
    .delete(menu.delete_item);
};