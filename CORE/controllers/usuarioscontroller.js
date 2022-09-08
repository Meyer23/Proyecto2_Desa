const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const { db } = require('../database/dbconexion')
const  Usuario  = require('../models/usuarios');
const Roles = require('../models/roles');

const GetUsuarios = async (req, res) => {

        const usuarios = await db.query(
            "SELECT u.nombre, u.email, r.nombreRol FROM USUARIOS u JOIN ROLES r ON u.idRol = r.id"
        );
        res.json( {usuarios} );
}

const PostUsuario = async (req, res) => {
    const {nombre, email, idRol} = req.body; 
    const buscarUsuaro = await Usuario.findOne({where: {email: req.body.email}});
    if(buscarUsuaro){
        res.json({
            msg: `Usuario ${req.body.email}, ya existe.`
        });
    }
    else{
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
}

module.exports = {
    GetUsuarios,
    PostUsuario
}
