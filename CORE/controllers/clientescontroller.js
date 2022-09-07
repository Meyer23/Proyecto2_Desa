const { response, request } = require('express');
const { db } = require('../database/dbconexion')
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


module.exports = {
    GetClientes,
    GetClienteByCi
}