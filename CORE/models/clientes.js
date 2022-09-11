const { DataTypes } = require('sequelize');
const {db}  = require('../database/dbconexion');


const Cliente = db.define('Clientes', {
    clienteId: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING
    },

    numeroCedula: {
        type: DataTypes.STRING
    },

    ruc: {
        type: DataTypes.STRING
    },

    correo: {
        type: DataTypes.STRING
    },

    tipoPersona: {
        type: DataTypes.STRING
    },

    telefono: {
        type: DataTypes.STRING
    },

    direccion: {
        type: DataTypes.STRING
    },

    estadoId: {
        type: DataTypes.INTEGER,
        require: false
    },

    saldo:{
        type: DataTypes.DOUBLE
    }
})

module.exports = Cliente;