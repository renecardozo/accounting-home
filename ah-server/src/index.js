'use strict'

/*<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 17c961fc527394bd1286e391c2a96328d4181bc2

const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db,(err, res) => {
    if(err) {
      console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexion a la base de datos establecida...');

    app.listen(config.port, () => {
        console.log(`Accounting Home app listening on port: ${config.port}!`);
    })
})
<<<<<<< HEAD
======= */

import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function listen() {
    try {
		mongoose.Promise = global.Promise;
		await mongoose.connect(config.db);
		console.log('Conexion a la base de datos establecida...');
		await app.listen(config.port);
		console.log(`Accounting Home app listening on port: ${config.port}!`);

	} catch (err){
		console.log(`Error al conectar a la base de datos: ${err}`);
	}
}	

listen();

//>>>>>>> f9feaa05415eabe77b6bb20ee08d3dcabcf3ef2d
