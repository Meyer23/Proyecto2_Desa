const { response, request } = require('express');
const { db } = require('../database/dbconexion')
const { Roles } = require('../models/roles');

const GetRoles = async (req, res) => {

        const roles = await Roles.findAll();
        res.json( {roles} );
}


module.exports = {
    GetRoles
}