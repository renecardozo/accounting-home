'use strict';
import accountingHome from '../middleware/accouting-home.middleware';
module.exports = function(app) {
  /**
   * Accounting home routes to expose to the clients.
   */
  app.route('/accoutingHome')
    .get(accountingHome.listAllItems)
    .post(accountingHome.createAItem);

  /**
   * Accounting home routes to expose to the clients.
   */
  app.route('/accoutingHome/:accoutingHomeId')
    .get(accountingHome.readAItem)
    .put(accountingHome.updateAItem)
    .delete(accountingHome.deleteAItem);
};