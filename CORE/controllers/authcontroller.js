const { request, response } = require('express');
const   Usuario   = require('../models/usuarios');
const bcrypt = require ('bcryptjs');

const login = async (req = request, res = response) => {
    const usuario = await Usuario.findOne({ where : {email: req.body.email}});
    if(usuario){
        const validarPassword = bcrypt.compareSync(req.body.password, usuario.password)
        if(validarPassword){
            res.status(200).json({
                msg: 'login correcto'
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