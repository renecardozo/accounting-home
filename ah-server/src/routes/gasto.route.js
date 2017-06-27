'use strict'
const express = require('express')
const GastoCrl = require('../controllers/gasto.controller')
const api = express.Router()

api.get('/gasto',GastoCrl.getGastos)
api.get('/gasto/:gastoId',GastoCrl.getGasto)
//api.post('/rubro/:rubroId/gasto', GastoCrl.saveGasto)
api.put('/gasto/:gastoId',GastoCrl.updateGasto)
api.delete('/gasto/:gastoId',GastoCrl.deleteGasto)

module.exports= api