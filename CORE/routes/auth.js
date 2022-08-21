const { Router } = require('express');
const { Check } = require('express-validator');
const  {login} = require('../controllers/authcontroller');

const router = Router();

router.post('/login', login);


module.exports = router;