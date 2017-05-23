'use strict';
import DbManager from '../database/db-manager';

const dbManager = new DbManager('rubro');

/**
 * Get a list of all item (rubros)
 * @param  {Object} req The properties and functions comming from client side
 * @param  {Object} res The properties and function to be sent from server side
 * @return {Promise<Object>}     [description]
 */
exports.listAllRubros = async function(req, res) {
  let responseValue;
  try {
    res.setHeader("Content-Type", "application/json");
    responseValue = await dbManager.getAll();

  } catch (err){
    responseValue = {'error':err.message};
  } finally {
    res.send(responseValue);
  }
};

/**
 * Create a new items (rubro)
 * @param  {Object} req The properties and functions comming from client side
 * @param  {Object} res The properties and function to be sent from server side
 * @return {Promise<Object>}     [description]
 */
exports.createARubro = async function(req, res) {
  let operation;
  try {
    res.setHeader("Content-Type", "application/json");
    operation = await dbManager.insertOne(req.body);
  } catch (err){
    operation = {'error':err.message};
  } finally {
    res.send(operation);
  }
};

/**
 * Read a item (rubro)
 * @param  {Object} req The properties and functions comming from client side
 * @param  {Object} res The properties and function to be sent from server side
 * @return {Promise<Object>}     [description]
 */
exports.readARubro = async function(req, res) {
  let responseValue;
  try {
    res.setHeader("Content-Type", "application/json");
    responseValue = await dbManager.findOneById(req.params.accoutingHomeId);

    if (!responseValue) {
      res.status(404);
      responseValue = {'warning': `The Rubro ${req.params.accoutingHomeId} does not exist`};
    }

  } catch (err){
    responseValue = {'error':err.message};
  } finally {
    res.send(responseValue);
  }
};

/**
 * Update a item (rubro)
 * @param  {Object} req The properties and functions comming from client side
 * @param  {Object} res The properties and function to be sent from server side
 * @return {Promise<Object>}     [description]
 */
exports.updateARubro = async function(req, res) {
  let operation;
  try {
    res.setHeader("Content-Type", "application/json");
    operation = await dbManager.findOneAndUpdate(req.params.accoutingHomeId, req.body);
  } catch (err){
    operation = {'error':err.message};
  } finally {
    res.send(operation);
  }
};

/**
 * Delete a item (rubros)
 * @param  {Object} req The properties and functions comming from client side
 * @param  {Object} res The properties and function to be sent from server side
 * @return {Promise<Object>}     [description]
 */
exports.deleteARubro = async function(req, res) {
  let operation;
  try {
    res.setHeader("Content-Type", "application/json");
    operation = await dbManager.removeOne(req.params.accoutingHomeId);
  } catch (err){
    operation = {'error':err.message};
  } finally {
    res.send(operation);
  }
};