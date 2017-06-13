'ues strict'

const Rubro = require('../models/rubro.model')

function saveRubro(req, res){
    let rubro= new Rubro({
        rubro: req.body.rubro
    })
    rubro.save((err, rubroStored) =>{
        if(err) res.status(500).send({ message: `Error al salvar la base de datos: ${err}`})

        res.status(200).send({rubro: rubroStored})
    })
}

function getRubro(req, res){
    let rubroId= req.params.rubroId;
    Rubro.findById(rubroId, (err, rubro)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petcion ${err}`})

        if(!rubro) return res.status(404).send({message: `El rubro no existe`})

        res.status(200).send({rubro})
    })
}

//por favor quisiera que me expliquen porque agregaron metodos asincronos aqui, los metodos asincronos
// y promesas se deben manejar del lado de cliente osea desde angular no desde el backend
/*function getRubros(req, res){
    Rubro.find({},(err, rubros)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if(!rubros) return res.status(404).send({message: `no existen rubros`})

        res.status(200).send({rubros})
    })*/
async function getRubros(req, res){
	try {
		let rubros = await Rubro.find({});
		if(!rubros) return res.status(404).send({message: `no existen rubros`})
		res.status(200).send({rubros})
	} catch (err){
		res.status(500).send({message: `Error al realizar la peticion: ${err}`});
	}
}

function updateRubro(req, res){
    let rubroId= req.params.rubroId
    let update = req.body

    Rubro.findByIdAndUpdate(rubroId, update,(err, rubroUpdated)=>{
        if(err) res.status(500).send({message: `Error al actualizar el rubro: ${err}`})

        res.status(200).send({rubro:rubroUpdated})
    })
}

function deleteRubro(req, res){
    let rubroId = req.params.rubroId
    Rubro.findById(rubroId, (err, rubro)=>{
        if(err) res.status(500).send({message: `Error al borrar el rubro ${err}`})

        rubro.remove(err=> {
            if(err) res.status(500).send({message: `Error al borrar el rubro ${err}`})

            res.status(200).send({message: `El rubro ha sido eliminado`})
        })
    })
}

module.exports= {
    saveRubro,
    getRubro,
    getRubros,
    updateRubro,
    deleteRubro
}