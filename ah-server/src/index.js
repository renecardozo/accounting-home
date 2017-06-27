'use strict'
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