'use strict';
module.exports = function(app) {
  var rest = require('../controllers/restController');
  
  //rest Routes
  app.route('/products')
    .get(rest.list_all_products)
    .post(rest.create_a_product);
  
  app.route('/products/:productId')
    .get(rest.read_a_product)
    .put(rest.update_a_product)
    .delete(rest.delete_a_product);
};