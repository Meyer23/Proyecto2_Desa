const Role = require('../models/roles');
const Usuario = require('../models/usuarios');

const esRoleValido = async(nombre = '') => {

    const existeRol = await Role.findOne({ nombre });
    if ( !existeRol ) {
        throw new Error(`El rol ${ nombre } no está registrado en la BD`);
    }
}

const emailExiste = async( email = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ email });
    if ( existeEmail ) {
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
}




module.exports = {
    esRoleValido,
    emailExiste
}
