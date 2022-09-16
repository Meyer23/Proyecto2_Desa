const { response, request } = require('express');
const { ResultWithContext } = require('express-validator/src/chain');
const { db } = require('../database/dbconexion');
const { Op } = require('sequelize');
const  Proveedor  = require('../models/proveedores');

const GetProveedores = async (req, res) => {

    const proveedores = await Proveedor.findAll(
        {
            where: {estadoId: 1}
        }
    );
    res.json( {proveedores} );
}

const PostProveedor = async (req, res) =>{
    const proveedorExistente = await Proveedor.findOne({where : {numeroCedula: req.body.numeroCedula}});
    if(proveedorExistente){
        res.json({
            msg: `El proveedor con documento ${req.body.numeroCedula} o 
                ${req.body.ruc} ya existe en el sistema.`
        });
    }
    else{
        var proveedor = {
            nombre: req.body.nombre,
            numeroCedula: req.body.numeroCedula,
            ruc : req.body.ruc,
            telefono: req.body.telefono,
            email: req.body.email,           
            direccion: req.body.direccion
        }
        const nuevoProveedor = await Proveedor.create(proveedor);
        res.status(400).json({
            nuevoProveedor
        });
    }
}

const PutProveedor = async(req, res) => {
    const actualizarProveedor = await Proveedor.update(
    {
        nombre: req.body.nombre,
        numeroCedula: req.body.numeroCedula,
        ruc : req.body.ruc,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion        
    },
    {
        where: {proveedorId: req.params.id},
    });
    res.json({
        msg: 'Proveedor actualizado',
        proveedorId: req.params.id
    });
}

const DeleteProveedor = async(req, res) => {
    const borrarProveedor = await Proveedor.update(
        {
            estadoId: 2
        },
        {
            where: {proveedorId: req.params.id}
        }
    );
    res.json({
        msg: 'Proveedor borrado.',
        proveedorId: req.params.id
    });
}


module.exports = {
    GetProveedores,
    PostProveedor,
    PutProveedor,
    DeleteProveedor
}