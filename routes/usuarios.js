const { Router } = require('express');
const { GetUsuarios } = require('../controllers/usuarioscontroller');
const router = Router();


router.get('/', GetUsuarios); 

module.exports = router;