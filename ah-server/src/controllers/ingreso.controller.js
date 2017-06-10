'ues strict'

const Ingreso = require('../models/ingreso.model')

function saveIngreso(req, res){
    let ingreso= new Ingreso({
        descripcion: req.body.descripcion,
        monto: req.body.monto
    })
    ingreso.save((err, ingresoStored) =>{
        if(err) res.status(500).send({ message: `Error al salvar la base de datos: ${err}`})

        res.status(200).send({ingreso: ingresoStored})
    })
}

function getIngreso(req, res){
    let ingresoId= req.params.ingresoId;
    Ingreso.findById(ingresoId, (err, ingreso)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petcion ${err}`})

        if(!ingreso) return res.status(404).send({message: `El ingreso no existe`})

        res.status(200).send({ingreso})
    })
}

function getIngresos(req, res){
    Ingreso.find({},(err, ingresos)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if(!ingresos) return res.status(404).send({message: `no existen ingresos`})

        res.status(200).send({ingresos})
    })
}

function updateIngreso(req, res){
    let ingresoId= req.params.ingresoId
    let update = req.body

    Ingreso.findByIdAndUpdate(ingresoId, update,(err, ingresoUpdated)=>{
        if(err) res.status(500).send({message: `Error al actualizar el ingreso: ${err}`})

        res.status(200).send({ingreso:ingresoUpdated})
    })
}

function deleteIngreso(req, res){
    let ingresoId = req.params.ingresoId
    Ingreso.findById(ingresoId, (err, ingreso)=>{
        if(err) res.status(500).send({message: `Error al borrar el ingreso ${err}`})

        ingreso.remove(err=> {
            if(err) res.status(500).send({message: `Error al borrar el ingreso ${err}`})

            res.status(200).send({message: `El ingreso ha sido eliminado`})
        })
    })
}

module.exports= {
    saveIngreso,
    getIngreso,
    getIngresos,
    updateIngreso,
    deleteIngreso
}