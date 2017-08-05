'use strict';
module.exports = function(app) {
  var menuList = require('../controllers/addMenuController');


  // menuList Routes
  app.route('/foodMenu')
    .get(menuList.list_all_items)
    .post(menuList.create_a_item);


  app.route('/foodMenu/:itemId')
    .get(menuList.find_item)
    .put(menuList.update_item)
    .delete(menuList.delete_item);
};