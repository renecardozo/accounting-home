'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RubroSchema = Schema({
    rubro: String,
    gastos :[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Gasto'
    }]

})
module.exports= mongoose.model('Rubro',RubroSchema)