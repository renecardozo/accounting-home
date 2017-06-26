'use strict'

const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const api = require('./routes')
const apiFondoAhorro = require('./routes/fondo_ahorro_route')
const apiGasto = require('./routes/gasto.route')
const apiGastoEspecifico = require('./routes/gasto-especifico.route')
const apiIngreso = require('./routes/ingreso.route')
const apiUmbral = require('./routes/umbral.route')
const apiRubro = require('./routes/rubro.route')



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api',api)
app.use('/api_fondo_ahorro',apiFondoAhorro)
app.use('/api_gasto',apiGasto)
app.use('/api_gasto_especifico',apiGastoEspecifico)
app.use('/api_ingreso',apiIngreso)
app.use('/api_umbral',apiUmbral)
app.use('/api_rubro',apiRubro)

module.exports= app;