'use strict'

const express = require('express')
const userCtrl = require('../controllers/user.controller')
const auth = require('../middleware/auth.middleware')
const api = express. Router()


api.post('/signup',userCtrl.signUp)
api.post('/signin',userCtrl.signIn)
api.get('/private',auth ,function(req, res){
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api