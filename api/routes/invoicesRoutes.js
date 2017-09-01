'use strict';
module.exports = function(app) {
  var invoice = require('../controllers/invoicesController');


  // invoice Routes
  app.route('/invoices')
    .get(invoice.list_all_items)
    .post(invoice.create_a_item);
};