const { express } = require('express');
const { db } = require('../database/dbconexion')

const GetEstados = (req, res) => {
        db.query('SELECT * FROM `Estados` as Estados', function(error, result){
        res.json({
        Estados: result
        })
    });
}

module.exports = {
    GetEstados
}