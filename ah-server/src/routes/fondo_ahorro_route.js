'use strict'
 
const express = require('express')
const FondoAhorroCtrl = require('../controllers/fondo_ahorro.controller')
const api = express. Router()

api.get('/fondo_ahorro',FondoAhorroCtrl.getFondosAhorro)
api.get('/fondo_ahorro/:fondoAhorroId',FondoAhorroCtrl.getFondoAhorro);
api.post('/fondo_ahorro',FondoAhorroCtrl.saveFondoAhorro);
api.put('/fondo_ahorro/:fondoAhorroId',FondoAhorroCtrl.updateFondosAhorro);
api.delete('/fondo_ahorro/:fondoAhorroId',FondoAhorroCtrl.deleteFondoAhorro);

module.exports = api