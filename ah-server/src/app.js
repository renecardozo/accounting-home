'use strict'
<<<<<<< HEAD

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
=======
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './routes';
import apiFondoAhorro from './routes/fondo_ahorro_route';
import apiGasto from './routes/gasto.route';
import apiGastoEspecifico from './routes/gasto-especifico.route';
import apiIngreso from './routes/ingreso.route';
import apiUmbral from './routes/umbral.route';
import apiRubro from './routes/rubro.route';

const app = express();
app.use(cors())
>>>>>>> f9feaa05415eabe77b6bb20ee08d3dcabcf3ef2d

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