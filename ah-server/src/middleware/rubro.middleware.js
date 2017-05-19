'use strict';
import DbManager from '../database/db-manager';

const dbManager = new DbManager('rubro');

exports.listAllRubros = function(req, res) {
  /*
  *TODO implement list all Rubros 
  */

};

exports.createARubro = async function(req, res) {
	let operation;
	try {
		res.setHeader("Content-Type", "application/json");
		console.log(req.body);
		operation = await dbManager.insertOne(req.body);
	} catch (err){
		operation = {'error':err.message};
	} finally {
		res.send(operation);
	}
};

exports.readARubro = async function(req, res) {
	let responseValue;
	try {
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

exports.updateARubro = function(req, res) {
  /*
  *TODO implement list all Rubros 
  */
};

exports.deleteARubro = function(req, res) {
 /*
  *TODO implement list all Rubros 
  */
};