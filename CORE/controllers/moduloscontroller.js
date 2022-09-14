const { response, request } = require('express');
const { db } = require('../database/dbconexion')
const { Modulos } = require('../models/modulos');

const GetModulos = async (req, res) => {

        const modulos = await Modulos.findAll();
        res.json( {modulos} );
}

const PostModulo = async(req, res) => {
    const moduloExiste = await Modulos.findOne({where: {nombre: req.body.nombre}});
    if(!moduloExiste){
        var nuevoModulo = {
            nombre: req.body.nombre
        }
        const crearModulo = await Modulos.create(nuevoModulo);
        res.json({
            msg: `Modulo ${req.body.nombre} creado.`
        });
    }
    else{
        res.json({
            msg: 'Modulo ya existe.'
        });
    }
}

const PutModulo = async(req, res) => {
    const editarModulo = await Modulos.update(
        {
            nombre: req.body.nombre
        },
        {
            where: {id: req.params.id}
        }
    )
    res.json({
        msg: editarModulo
    });
}

const DeleteModulo = async(req, res) => {
    const borrarModulo = await Modulos.destroy(
        {where: {id: req.params.id}}
    );
    res.json({
        msg: 'Modulo borrado.'
    });
}

module.exports = {
    GetModulos,
    PostModulo,
    PutModulo,
    DeleteModulo
}