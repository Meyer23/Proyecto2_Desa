const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios');


const validarJWT = async(req = request, res = response, next) => {

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

        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
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
    validarJWT