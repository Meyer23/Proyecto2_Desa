const { Router } = require('express');
const { GetUsuarios, PostUsuario, PutUsuario } = require('../controllers/usuarioscontroller');
const validarJWTAdmin = require('../middlewares/validar-admin-jwt');
const router = Router();


router.get('/', [
validarJWTAdmin
], GetUsuarios);

router.put('/:id', PutUsuario)

router.post('/', PostUsuario)

module.exports = router;