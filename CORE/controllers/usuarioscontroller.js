const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const { db } = require('../database/dbconexion')
const  Usuario  = require('../models/usuarios');

const GetUsuarios = async (req, res) => {

        const usuarios = await Usuario.findAll();
        res.json({usuarios});
}

const PostUsuario = async (req, res) => {
    const {nombre, email, idRol} = req.body; 
    const buscarUsuario = await Usuario.findOne({where: {email: req.body.email}});
    if(buscarUsuario){
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

const PutUsuario = async (req, res = response) => {
    const salt = bcrypt.genSaltSync();
    const actualizarUsuario = await Usuario.update(
        {
            nombre: req.body.nombre,
            password: bcrypt.hashSync(req.body.password, salt),
            idRol: req.body.idRol,
        },
        {
            where: {id: req.params.id},
        }
    );
        res.json({
            msg: 'Actualizado un registro',
            usuario: actualizarUsuario
        });
    }

const DeleteUsuario = async(req, res) => {
    const borrarUsuario = await Usuario.destroy({where : {id : req.params.id}});
    res.json({
        msg: 'Registro borrado.',
        idUsuario: req.params.id
    })
}

module.exports = {
    GetUsuarios,
    PostUsuario,
    PutUsuario,
    DeleteUsuario
}
