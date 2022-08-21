const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const { db } = require('../database/dbconexion')
const  Usuario  = require('../models/usuarios');

const GetUsuarios = async (req, res) => {

        const usuarios = await Usuario.findAll();
        res.json( {usuarios} );
}

const PostUsuario = async (req, res) => {
    const {nombre, email, idRol} = req.body; 
    const salt = bcrypt.genSaltSync();
    var usuario = {
        nombre: nombre,
        email: email,
        idRol: idRol,
        password: bcrypt.hashSync(req.body.password, salt)
    };
    const nuevo_usuario = await Usuario.create(usuario);
    res.status(200).json({
        msg: 'Usuario creado.',
        usuario: nuevo_usuario
    });
}


module.exports = {
    GetUsuarios,
    PostUsuario
}