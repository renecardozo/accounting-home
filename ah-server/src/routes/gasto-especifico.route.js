'use strict'
const express = require('express')
const GastoCrl = require('../controllers/gasto_especifico.controller')
const api = express.Router()

api.get('/gastos_especifico',GastoCrl.getGastosEspecificos)
api.get('/gastos_especifico/:gastoEspecificoId',GastoCrl.getGastoEspecifico)
api.post('/gastos_especifico', GastoCrl.saveGastoEspecifico)
api.put('/gastos_especifico/:gastoEspecificoId',GastoCrl.updateGastoEspecifico)
api.delete('/gastos_especifico/:gastoEspecificoId',GastoCrl.deleteGastoEspecifico)

module.exports= api