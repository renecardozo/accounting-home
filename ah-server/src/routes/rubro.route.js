'use strict'

import express from 'express';
import RubroCrl from '../controllers/rubro.controller';
const GastoCrl = require('../controllers/gasto.controller');
const api = express.Router()

api.get('/rubro',RubroCrl.getRubros)
api.get('/rubro/:rubroId',RubroCrl.getRubro)
api.post('/rubro', RubroCrl.saveRubro)
api.post('/rubro/:rubroId/gasto', GastoCrl.saveGasto)
api.put('/rubro/:rubroId',RubroCrl.updateRubro)
api.delete('/rubro/:rubroId',RubroCrl.deleteRubro)

module.exports= api