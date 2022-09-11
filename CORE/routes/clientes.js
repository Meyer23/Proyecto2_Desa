const { Router } = require('express');
const { GetClientes, GetClienteByCi, PostCliente, PutCliente, DeleteCliente } = require('../controllers/clientescontroller');
const router = Router();


router.get('/', GetClientes); 

router.get('/:numeroCedula', GetClienteByCi)

router.post('/', PostCliente)

router.put('/:id', PutCliente)

router.delete('/:id', DeleteCliente)

module.exports = router;