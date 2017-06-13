'use strict'
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