'use strict';
import DbManager from '../database/db-manager';

const dbManager = new DbManager('gastos');

exports.updateAGastos = async function(req, res) {
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