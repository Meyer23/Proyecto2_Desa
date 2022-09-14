const { Router } = require('express');
const { GetModulos, PostModulo, PutModulo, DeleteModulo } = require('../controllers/moduloscontroller');
const router = Router();


router.get('/', GetModulos); 
router.post('/', PostModulo);
router.put('/:id', PutModulo);
router.delete('/:id', DeleteModulo);

module.exports = router;