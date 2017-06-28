'ues strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GastoSchema = Schema({
    descripcion: String,
    monto: {type: Number, default:0 },
    rubro: { type : String},
    fecha: {type: Date, default: Date.now()}
    
})
module.exports = mongoose.model('Gasto',GastoSchema)