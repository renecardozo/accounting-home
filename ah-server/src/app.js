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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'localhost:3001/api_gasto/gasto');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api',api)
app.use('/api_fondo_ahorro',apiFondoAhorro)
app.use('/api_gasto',apiGasto)
app.use('/api_gasto_especifico',apiGastoEspecifico)
app.use('/api_ingreso',apiIngreso)
app.use('/api_umbral',apiUmbral)
app.use('/api_rubro',apiRubro)


module.exports= app;