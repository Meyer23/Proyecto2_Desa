const { response, request } = require('express');
const { db } = require('../database/dbconexion')
const { Roles } = require('../models/roles');

const GetRoles = async (req, res) => {

        const roles = await Roles.findAll();
        res.json( {roles} );
}

const PostRoles = async(req, res) => {
    const crearRol = await Roles.findOne({where: {nombreRol: req.body.nombreRol}});
    if(!crearRol){
        var nuevoRol = {
            nombreRol: req.body.nombreRol
        }
        const crear = await Roles.create(nuevoRol);
        res.json({
            msg: `Rol ${req.body.nombreRol} creado.`
        });
    }
    else{
        res.json({
            msg: `Rol ${req.body.nombreRol} ya existe.`
        });
    }
}


const PutRoles = async(req, res) => {
    const actualizarRol = await Roles.update(
        {
            nombreRol: req.body.nombreRol
        },
        {
            where: {id: req.params.id}
        }
    );
    res.json({
        msg: 'Rol actualizado.'
    })
}

const DeleteRol = async(req, res) => {
    const borrarRol = await Roles.destroy({where: {id: req.params.id}});
    if(!borrarRol){
        res.json({
            msg: `No existe el rol con id ${req.params.id}`
        });
    }
    else{
        res.status(200).json({
            msg: 'Rol borrado.'
        })
    }
}


module.exports = {
    GetRoles,
    PutRoles,
    PostRoles,
    DeleteRol
}