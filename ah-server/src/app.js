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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

app.use('/api',api)
app.use('/api_fondo_ahorro',apiFondoAhorro)
app.use('/api_gasto',apiGasto)
app.use('/api_gasto_especifico',apiGastoEspecifico)
app.use('/api_ingreso',apiIngreso)
app.use('/api_umbral',apiUmbral)
app.use('/api_rubro',apiRubro)


module.exports= app;