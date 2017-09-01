'use strict';
module.exports = function(app) {
  var invoice = require('../controllers/InvoicesController');


  // invoice Routes
  app.route('/api/v1/invoices')
    .get(invoice.list_all_items)
    .post(invoice.create_a_item);
};
