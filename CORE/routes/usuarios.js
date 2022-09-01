const { Router } = require('express');
const { GetUsuarios, PostUsuario } = require('../controllers/usuarioscontroller');
const validarJWTAdmin = require('../middlewares/validar-admin-jwt');
const validarJWT = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');
const router = Router();


router.get('/', [
validarJWTAdmin
], GetUsuarios); 

router.post('/', PostUsuario)

module.exports = router;