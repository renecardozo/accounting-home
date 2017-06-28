'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IngresoSchema = Schema({
    descripcion: String,
    monto :{ type: Number, default: 0},
    fecha : { type: Date, default: Date.now()}
})
module.exports= mongoose.model('Ingreso',IngresoSchema)