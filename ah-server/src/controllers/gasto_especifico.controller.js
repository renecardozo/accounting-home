'ues strict'

const GastoEspecifico = require('../models/gasto-especifico.model')

function saveGastoEspecifico(req, res){
    console.log('viene aqui')
    let gastoespecifico= new GastoEspecifico({
        descripcion: req.body.descripcion,
        monto: req.body.monto
    })
    gastoespecifico.save((err, gastoEspecificoStored) =>{
        if(err) res.status(500).send({ message: `Error al salvar la base de datos: ${err}`})

        res.status(200).send({gastoespecifico: gastoEspecificoStored})
    })
}

function getGastoEspecifico(req, res){
    let gastoEspecificoId= req.params.gastoEspecificoId;
    GastoEspecifico.findById(gastoEspecificoId, (err, gastoespecifico)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petcion ${err}`})

        if(!gasto) return res.status(404).send({message: `El gasto no existe`})

        res.status(200).send({gastoespecifico})
    })
}

async function getGastosEspecificos(req, res){
	try {
		let GastoEspecifico = await GastoEspecifico.find({});
		if(!gastosEspecificos) return res.status(404).send({message: `no existen gastos`})
			res.status(200).send({gastosEspecificos})
	} catch (err){
		res.status(500).send({message: `Error al realizar la peticion: ${err}`});
	}
}

function updateGastoEspecifico(req, res){
    let gastoEspecificoId= req.params.gastoEspecificoId
    let update = req.body

    GastoEspecifico.findByIdAndUpdate(gastoEspecificoId, update,(err, gastoEspecificoUpdated)=>{
        if(err) res.status(500).send({message: `Error al actualizar el gasto especifico: ${err}`})

        res.status(200).send({gastoespecifico:gastoEspecificoUpdated})
    })
}

function deleteGastoEspecifico(req, res){
    let gastoEspecificoId = req.params.gastoEspecificoId
    GastoEspecifico.findById(gastoEspecificoId, (err, gasto)=>{
        if(err) res.status(500).send({message: `Error al borrar el gasto especifico: ${err}`})

        gasto.remove(err=> {
            if(err) res.status(500).send({message: `Error al borrar el gasto especifico:  ${err}`})

            res.status(200).send({message: `El gasto especifico ha sido eliminado`})
        })
    })
}

module.exports= {
    saveGastoEspecifico,
    getGastoEspecifico,
    getGastosEspecificos,
    updateGastoEspecifico,
    deleteGastoEspecifico
}