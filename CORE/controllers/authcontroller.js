const { request, response } = require('express');
const   Usuario   = require('../models/usuarios');

const login = async (req = request, res = response) => {
    const usuario = await Usuario.findOne({ where :
                     {email: req.body.email, 
                      password: req.body.password
                     }});
    if(usuario){
        res.status(200).json({
            msg: 'login correcto'
        });
    }
    else
        res.status(401).json({
            msg: 'Usuario o contrasenha no valido.'
        })
};


module.exports =  {login};