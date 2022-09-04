const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
const {db}  = require('../database/dbconexion');


const Usuario = db.define('Usuarios', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: true
    },

    nombre: {
        type: DataTypes.STRING
    },

    idRol: {
        type: DataTypes.INTEGER
    },

    email: {
        type: DataTypes.STRING
    },

    password: {
        type: DataTypes.STRING
    }
})

module.exports = Usuario;