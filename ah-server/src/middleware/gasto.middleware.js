'use strict';
import DbManager from '../database/db-manager';

const dbManager = new DbManager('gasto');

exports.listAllGastos = async function(req, res) {
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