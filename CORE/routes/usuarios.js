const { Router } = require('express');
const { GetUsuarios, PostUsuario } = require('../controllers/usuarioscontroller');
const router = Router();


router.get('/', GetUsuarios); 
router.post('/', PostUsuario)

module.exports = router;