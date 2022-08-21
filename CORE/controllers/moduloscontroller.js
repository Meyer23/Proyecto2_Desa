const { response, request } = require('express');
const { db } = require('../database/dbconexion')
const { Modulos } = require('../models/modulos');

const GetModulos = async (req, res) => {

        const modulos = await Modulos.findAll();
        res.json( {modulos} );
}


module.exports = {
    GetModulos
}