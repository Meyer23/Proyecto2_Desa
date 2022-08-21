const { request, response } = require('express');
const   Usuario   = require('../models/usuarios');

const login = async (req = request, res = response) => {
    const usuario = await Usuario.findOne({ where :
                     {email: req.body.email, 
                      contrasenha: req.body.contrasenha,
                    idRol: 2}});
    if(usuario){
        res.json({
            msg: 'Bienvenido, Administrador.'
        })
    }
    else{
        res.status(401).json({
            msg: 'Usuario no existe o password no valido.'
        });
    }
};


module.exports =  {login};