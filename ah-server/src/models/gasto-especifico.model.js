'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GastoEspecificoSchema = Schema({
    descripcion: {type: String},
    inicio: {type: Date, default: Date.now()},
    fin: {type: Date, default: Date.now()},
    monto: { type: Number, default: 0}
});

module.exports= mongoose.model('GastoEspecifico',GastoEspecificoSchema);