const { DataTypes } = require('sequelize');
const { db } = require('../database/dbconexion');


const Roles = db.define('Roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    nombreRol: {
        type: DataTypes.STRING
    }
});


module.exports = {Roles};