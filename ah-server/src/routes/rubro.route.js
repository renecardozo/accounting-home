'use strict';
import accountingHome from '../middleware/rubro.middleware';
module.exports = function(app) {
  // todoList Routes
  app.route('/rubros')
    .get(accountingHome.listAllRubros)
    .post(accountingHome.createARubro);


  app.route('/rubros/:accoutingHomeId')
    .get(accountingHome.readARubro)
    .put(accountingHome.updateARubro)
    .delete(accountingHome.deleteARubro);
};