const { request, response } = require('express');
const  { Usuario }  = require('../models/usuarios');

const login = async (req = request, res = response) => {
    const usuario = await Usuario.findOne({ where: { email: req.body.email } });
    if(usuario)
    res.json({
        msg: 'Login correcto'
    });
    else{
        res.status(401).json({
            msg: 'Usuario no existe'
        });
    }
};


module.exports =  {login};