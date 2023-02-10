const express = require('express');

const controller = require('../controllers/auth.controller');
const validate = require('../validate/userValidate');

const router = express.Router();


router.get('/login', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;

 