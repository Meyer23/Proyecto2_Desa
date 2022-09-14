const { Router } = require('express');
const { GetRoles, PutRoles, PostRoles, DeleteRol } = require('../controllers/rolescontroller');
const router = Router();


router.get('/', GetRoles); 
router.post('/', PostRoles);
router.put('/:id', PutRoles);
router.delete('/:id', DeleteRol);

module.exports = router;