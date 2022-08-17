const { Router } = require('express');
const { GetEstados } = require('../controllers/estadoscontroller');
const router = Router();


router.get('/', GetEstados); 

module.exports = router;