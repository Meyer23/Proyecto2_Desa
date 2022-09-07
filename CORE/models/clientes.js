const { DataTypes } = require('sequelize');
const {db}  = require('../database/dbconexion');


const Cliente = db.define('Clientes', {
    clienteId: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        type: DataTypes.INTEGER
    },

    telefono: {
        type: DataTypes.STRING
    },

    estadoId: {
        type: DataTypes.INTEGER
    },

    saldo:{
        type: DataTypes.DOUBLE
    }
})

module.exports = Cliente;