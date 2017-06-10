'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UmbralSchema = Schema({
    monto :{ type: Number, default: 0},
    estado_activo : { type: Boolean, default: false}
})
module.exports= mongoose.model('Umbral',UmbralSchema)