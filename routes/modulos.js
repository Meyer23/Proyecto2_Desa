const { Router } = require('express');
const { GetModulos } = require('../controllers/moduloscontroller');
const router = Router();


router.get('/', GetModulos); 

module.exports = router;