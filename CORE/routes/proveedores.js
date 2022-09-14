const { Router } = require('express');
const { GetProveedores, PostProveedor, PutProveedor, DeleteProveedor } = require('../controllers/proveedorescontroller');
const router = Router();


router.get('/', GetProveedores); 

router.post('/', PostProveedor)

router.put('/:id', PutProveedor)

router.delete('/:id', DeleteProveedor)

module.exports = router;