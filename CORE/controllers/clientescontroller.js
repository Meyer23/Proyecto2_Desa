const { response, request } = require('express');
const { ResultWithContext } = require('express-validator/src/chain');
const { db } = require('../database/dbconexion');
const { Op } = require('sequelize');
const  Cliente  = require('../models/clientes');

const GetClientes = async (req, res) => {

        const clientes = await Cliente.findAll();
        res.json( {clientes} );
}

const GetClienteByCi = async (req, res) => {
    const clienteBuscado = await Cliente
                                 .findOne({ where : {numeroCedula: req.params.numeroCedula}})
    if(clienteBuscado){
        res.status(200).json({
            msg: 'Cliente encontrado',
            cliente: clienteBuscado
        });
    }
    else{
        res.status(404).json({
            msg: 'Cliente no existe.'
        });
    }
}

const PostCliente = async (req, res) =>{
    const clienteExistente = await Cliente.findOne({where : {numeroCedula: req.body.numeroCedula}});
    if(clienteExistente){
        res.json({
            msg: `El cliente con documento ${req.body.numeroCedula} o 
                ${req.body.ruc} ya existe en el sistema.`
        });
    }
    else{
        var cliente = {
            nombre: req.body.nombre,
            numeroCedula: req.body.numeroCedula,
            ruc : req.body.ruc,
            correo: req.body.correo,
            tipoPersona: req.body.tipoPersona,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        }
        const nuevoCliente = await Cliente.create(cliente);
        res.status(400).json({
            nuevoCliente
        });
    }
}

const PutCliente = async(req, res) => {
    const actualizarCliente = await Cliente.update(
    {
        nombre: req.body.nombre,
        numeroCedula: req.body.numeroCedula,
        ruc : req.body.ruc,
        correo: req.body.correo,
        tipoPersona: req.body.tipoPersona,
        telefono: req.body.telefono,
        direccion: req.body.direccion        
    },
    {
        where: {clienteId: req.params.id},
    });
    res.json({
        msg: 'Cliente actualizado',
        clienteId: req.params.id
    });
}

const DeleteCliente = async(req, res) => {
    const borrarCliente = await Cliente.destroy({where : {clienteId: req.params.id}});
    res.json({
        msg: 'Cliente borrado.',
        clienteId: req.params.id
    });
}


module.exports = {
    GetClientes,
    GetClienteByCi,
    PostCliente,
    PutCliente,
    DeleteCliente
}