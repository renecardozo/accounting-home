'use strict'
const express = require('express')
const IngresoCrl = require('../controllers/ingreso.controller')
const api = express.Router()

api.get('/ingreso',IngresoCrl.getIngresos)
api.get('/ingreso/:ingresoId',IngresoCrl.getIngreso)
api.post('/ingreso', IngresoCrl.saveIngreso)
api.put('/ingreso/:ingresoId',IngresoCrl.updateIngreso)
api.delete('/ingreso/:ingresoId',IngresoCrl.deleteIngreso)

module.exports= api