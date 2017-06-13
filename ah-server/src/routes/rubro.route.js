'use strict'

const express = require('express')
const RubroCrl = require('../controllers/rubro.controller')

const api = express.Router()

api.get('/rubro',RubroCrl.getRubros)
api.get('/rubro/:rubroId',RubroCrl.getRubro)
api.post('/rubro', RubroCrl.saveRubro)
api.put('/rubro/:rubroId',RubroCrl.updateRubro)
api.delete('/rubro/:rubroId',RubroCrl.deleteRubro)

module.exports= api