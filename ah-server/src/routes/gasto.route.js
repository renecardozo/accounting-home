'use strict'
const express = require('express')
const GastoCrl = require('../controllers/gasto.controller')
const auth = require('../middleware/auth.middleware')
const api = express.Router()

api.get('/gasto',auth,GastoCrl.getGastos)
api.get('/gasto/:gastoId',GastoCrl.getGasto)
api.post('/gasto', GastoCrl.saveGasto)
api.put('/gasto/:gastoId',GastoCrl.updateGasto)
api.delete('/gasto/:gastoId',GastoCrl.deleteGasto)

module.exports= api