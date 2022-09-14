const { DataTypes } = require('sequelize');
const {db}  = require('../database/dbconexion');


const Proveedor = db.define('Proveedores', {
    proveedorId: { 
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

    telefono: {
        type: DataTypes.STRING
    },

    email: {
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

module.exports = Proveedor;