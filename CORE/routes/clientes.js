const { Router } = require('express');
const { GetClientes, GetClienteByCi } = require('../controllers/clientescontroller');
const router = Router();


router.get('/', GetClientes); 

router.get('/:numeroCedula', GetClienteByCi)

module.exports = router;