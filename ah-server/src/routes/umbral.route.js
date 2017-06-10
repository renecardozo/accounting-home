'use strict'
const express = require('express')
const UmbralCrl = require('../controllers/umbral.controller')
const api = express.Router()

api.get('/umbral',UmbralCrl.getUmbrales)
api.get('/umbral/:umbralId',UmbralCrl.getUmbral)
api.post('/umbral', UmbralCrl.saveUmbral)
api.put('/umbral/:umbralId',UmbralCrl.updateUmbral)
api.delete('/umbral/:umbralId',UmbralCrl.deleteUmbral)

module.exports= api