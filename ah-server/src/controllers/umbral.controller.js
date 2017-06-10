'ues strict'

const Umbral = require('../models/umbral.model')

function saveUmbral(req, res){
    let umbral= new Umbral({
        monto: req.body.monto,
        estado_activo: req.body.estadoActivo
    })
    umbral.save((err, umbralStored) =>{
        if(err) res.status(500).send({ message: `Error al salvar la base de datos: ${err}`})

        res.status(200).send({umbral: umbralStored})
    })
}

function getUmbral(req, res){
    let umbralId= req.params.umbralId;
    Umbral.findById(umbralId, (err, umbral)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petcion ${err}`})

        if(!umbral) return res.status(404).send({message: `El umbral no existe`})

        res.status(200).send({umbral})
    })
}

function getUmbrales(req, res){
    Umbral.find({},(err, umbrales)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if(!umbrales) return res.status(404).send({message: `no existen umbrales`})

        res.status(200).send({umbrales})
    })
}

function updateUmbral(req, res){
    let umbralId= req.params.umbralId
    let update = req.body

    Umbral.findByIdAndUpdate(umbralId, update,(err, umbralUpdated)=>{
        if(err) res.status(500).send({message: `Error al actualizar el umbral: ${err}`})

        res.status(200).send({umbral:umbralUpdated})
    })
}

function deleteUmbral(req, res){
    let umbralId = req.params.umbralId
    Umbral.findById(umbralId, (err, umbral)=>{
        if(err) res.status(500).send({message: `Error al borrar el umbral ${err}`})

        umbral.remove(err=> {
            if(err) res.status(500).send({message: `Error al borrar el umbral ${err}`})

            res.status(200).send({message: `El umbral ha sido eliminado`})
        })
    })
}

module.exports= {
    saveUmbral,
    getUmbral,
    getUmbrales,
    updateUmbral,
    deleteUmbral
}