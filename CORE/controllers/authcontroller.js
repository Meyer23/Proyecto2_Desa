const { request, response } = require('express');
const bcrypt = require ('bcryptjs');
const Usuario   = require('../models/usuarios');
const generarJWT = require('../helpers/generar-jwt');


const login = async (req = request, res = response) => {
    const usuario = await Usuario.findOne({ where : {email: req.body.email}});
    if(usuario){
        const validarPassword = bcrypt.compareSync(req.body.password, usuario.password)
        if(validarPassword){
            const token = await generarJWT(usuario.email);
            res.status(200).json({
                msg: 'login correcto',
                usuario: usuario.email,
                token
            });
        }
        else{
            res.json({
                msg: 'Contrasenha no valida.'
            })
        }
    }                                        
    else
        res.status(401).json({
            msg: 'Usuario o contrasenha no valido.'
        })
};


module.exports =  {login};