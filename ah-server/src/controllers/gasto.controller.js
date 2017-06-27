'use strict'

const Gasto = require('../models/gasto.model');
const Rubro = require('../models/rubro.model');

function saveGasto(req, res){
    let rubroId = req.params.rubroId;

    Rubro.findById(rubroId, (err, rubro) => {
        if(err) return res.status(500).send({message: `Error al realizar la petcion ${err}`})

        if(!rubro) return res.status(404).send({message: `El rubro no existe`})

        let gasto= new Gasto({
        descripcion: req.body.descripcion,
        monto: req.body.monto,
        rubro: rubro,
        fecha: req.body.fecha
        });
    
        gasto.save((err, gastoStored) => {
        if(err) res.status(500).send({ message: `Error al salvar la base de datos: ${err}`})

        rubro.gastos.push(gasto);
        rubro.save((err, rubroStored) => {
                if(err) res.status(500).send({ message: `Error al salvar la base de datos: ${err}`})

                res.status(200).send({gasto: gastoStored});
            });
        });
    })
}

function getGasto(req, res){
    let gastoId= req.params.gastoId;
    Gasto.findById(gastoId, (err, gasto)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petcion ${err}`})

        if(!gasto) return res.status(404).send({message: `El gasto no existe`})

        res.status(200).send({gasto})
    })
}

async function getGastos(req, res){
	try {
		let gastos = await Gasto.find({});
		if(!gastos) return res.status(404).send({message: `no existen gastos`})
			res.status(200).send({gastos})		
	} catch (err){
		res.status(500).send({message: `Error al realizar la peticion: ${err}`});
	}
}

function updateGasto(req, res){
    let gastoId= req.params.gastoId
    let update = req.body

    Gasto.findByIdAndUpdate(gastoId, update,(err, gastoUpdated)=>{
        if(err) res.status(500).send({message: `Error al actualizar el gasto: ${err}`})

        res.status(200).send({gasto:gastoUpdated})
    })
}

function deleteGasto(req, res){
    let gastoId = req.params.gastoId
    Gasto.findById(gastoId, (err, gasto)=>{
        if(err) res.status(500).send({message: `Error al borrar el gasto ${err}`})

        gasto.remove(err=> {
            if(err) res.status(500).send({message: `Error al borrar el producto ${err}`})

            res.status(200).send({message: `El producto ha sido eliminado`})
        })
    })
}

module.exports= {
    saveGasto,
    getGasto,
    getGastos,
    updateGasto,
    deleteGasto
}