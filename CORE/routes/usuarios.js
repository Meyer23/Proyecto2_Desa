const { Router } = require('express');
const { GetUsuarios, PostUsuario, PutUsuario, DeleteUsuario } = require('../controllers/usuarioscontroller');
const validarJWTAdmin = require('../middlewares/validar-admin-jwt');
const router = Router();


router.get('/', GetUsuarios);

router.put('/:id',[
    validarJWTAdmin
], 
PutUsuario)

router.post('/', PostUsuario)
router.delete('/:id', DeleteUsuario)

module.exports = router;