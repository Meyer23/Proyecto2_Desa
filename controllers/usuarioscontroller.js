const { response, request } = require('express');
const { db } = require('../database/dbconexion')
const { Usuario } = require('../models/usuarios');

const GetUsuarios = async (req, res) => {

        const usuarios = await Usuario.findAll();
        res.json( {usuarios} );
}


module.exports = {
    GetUsuarios
}