'use strict';
import accountingHome from '../middleware/rubro.middleware';
module.exports = function(app) {
  /**
   * Rubros routes to serve to the clients.
   */
  app.route('/rubros')

    /**
     * @api {get} /rubros Request Rubro information
     * @apiName rubros
     * @apiGroup rubros
     * @apiSuccess {Object} Rubro of accounting home.
     */
    .get(accountingHome.listAllRubros)
    /**
     * @api {put} /rubros/ Modify Item information
     * @apiName PutRubro
     * @apiGroup Rubro
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
     * @apiUse UserNotFoundError
     */
    .post(accountingHome.createARubro);

  app.route('/rubros/:accoutingHomeId')
    /**
     * @api {get} /rubros/:accoutingHomeId' Request Rubro information
     * @apiName Getrubros
     * @apiGroup rubros
     *
     * @apiParam {Number} id Rubros unique ID.
     *
     * @apiSuccess {Object} Rubro of accounting home..
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
     * @apiUse UserNotFoundError
     */
    .get(accountingHome.readARubro)

    /**
     * @api {put} /user/ Modify User information
     * @apiName PutUser
     * @apiGroup User
     *
     * @apiParam {Number} id          Users unique ID.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
     * @apiUse UserNotFoundError
     */
    .put(accountingHome.updateARubro)
    /**
     * @api {get} /user/:id Deletes Rubro information
     * @apiName DeleteRubro
     * @apiGroup Rubro
     *
     * @apiParam {Number} id Rubro unique ID.
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
     * @apiUse UserNotFoundError
     */
    .delete(accountingHome.deleteARubro);
};