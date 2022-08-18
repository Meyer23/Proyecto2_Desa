const { DataTypes } = require('sequelize');
const { db } = require('../database/dbconexion');


const Modulos = db.define('Modulos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    nombre: {
        type: DataTypes.STRING
    }
});


module.exports = {Modulos};