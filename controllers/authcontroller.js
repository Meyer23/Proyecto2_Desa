const { request, response } = require('express');
const  { Usuario }  = require('../models/usuarios');

const login = async (req = request, res = response) => {
    const {email, contrasenha} = req.body;
    const usuario = await Usuario.findOne({email, contrasenha})
    if(usuario.contrasenha == contrasenha)
    res.json({
        msg: 'Login correcto'
    });
    else{
        res.status(401).json({
            msg: 'Usuario no existe o password no valido.'
        });
    }
};


module.exports =  {login};