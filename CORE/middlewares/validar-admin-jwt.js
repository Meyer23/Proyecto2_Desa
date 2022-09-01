const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarios');


const validarJWTAdmin = async(req = request, res = response, next) => {

    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { email } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        // leer el usuario que corresponde al email
        const usuario = await Usuario.findOne({email});

        if (email !== 'admin@desa.com') {
            return res.status(401).json({
                msg: `El usuario ${email} no tiene permiso para realizar esta accion`
            })
        }

         req.usuario = usuario;
         next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = 
    validarJWTAdmin