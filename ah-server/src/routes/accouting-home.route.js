'use strict';
import accountingHome from '../middleware/accouting-home.middleware';
module.exports = function(app) {
  // todoList Routes
  app.route('/accoutingHome')
    .get(accountingHome.listAllItems)
    .post(accountingHome.createAItem);


  app.route('/accoutingHome/:accoutingHomeId')
    .get(accountingHome.readAItem)
    .put(accountingHome.updateAItem)
    .delete(accountingHome.deleteAItem);
};