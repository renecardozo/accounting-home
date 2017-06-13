'use strict'
const FondoAhorro = require('../models/fondo-ahorro.model');

function saveFondoAhorro(req, res){
    let fondo= new FondoAhorro();
    fondo.monto= req.body.monto;
    fondo.total= req.body.total;

    fondo.save((err, fondoStored) => {
        if(err) res.status(500).send({message: `Error al guardar un fondo de ahorro: ${err}`})
        res.status(200).send({fondo: fondoStored})
    })
}

function getFondoAhorro(req, res){
    let fondoAhorroId= req.params.fondoAhorroId

    FondoAhorro.findById(fondoAhorroId, (err, fondo)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})

        if(!fondo) return res.status(404).send({message: `El fondo de ahorro no existe`})

        res.status(200).send({fondo})
    })
}

function getFondosAhorro(req, res){
    FondoAhorro.find({},(err, fondos)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`})
        if(!fondos) return res.status(404).send({message: `No existen fondos de ahorros`})

        res.status(200).send({fondos});
    })
}

function updateFondosAhorro(req, res){
    let fondoAhorroId= req.params.fondoAhorroId
    let update= req.body

    FondoAhorro.findByIdAndUpdate(fondoAhorroId, update, (err, fondoUpdated) =>{
        if(err)res.status(500).send({message: `Error al actualizar el fondo de ahorro: ${err}`})

        res.status(200).send({fondo:fondoUpdated})
    })
}

function deleteFondoAhorro(req, res){
    let fondoAhorroId= req.params.fondoAhorroId

  FondoAhorro.findById(fondoAhorroId, (err,fondo) => {
    if(err) res.status(500).send({message: `Error al borrar el fondo de ahorro ${err}`})

    fondo.remove(err=>{
      if(err)res.status(500).send({message: `Error al borrar el fondo de ahorro ${err}`})
      res.status(200).send({message: `El producto ha sido eliminado`})
    })
  })
}

module.exports = {
    saveFondoAhorro,
    getFondoAhorro,
    getFondosAhorro,
    updateFondosAhorro,
    deleteFondoAhorro
}