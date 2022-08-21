const { Router } = require('express');
const { GetRoles } = require('../controllers/rolescontroller');
const router = Router();


router.get('/', GetRoles); 

module.exports = router;