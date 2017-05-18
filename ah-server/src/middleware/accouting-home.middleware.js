'use strict';
import DbManager from '../database/db-manager';
const dbManager = new DbManager();
exports.listAllItems = function(req, res) {
  /*
  *TODO implement list all items 
  */

};

exports.createAItem = function(req, res) {
  /*
  *TODO implement list all items 
  */
};

exports.readAItem = function(req, res) {
  dbManager.findOneById(req.params.accountingHomeId, (error, success) =>{
    if (error) {
      res.send({'error':error});
    } else {
      res.json({'success':success});
    }
  })
};

exports.updateAItem = function(req, res) {
  /*
  *TODO implement list all items 
  */
};

exports.deleteAItem = function(req, res) {
 /*
  *TODO implement list all items 
  */
};