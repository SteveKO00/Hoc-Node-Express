const express = require('express');

const controller = require('../controllers/user.controller');
const validate = require('../validate/userValidate');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/cookie', function(req, res, next){
    res.cookie('user-id', 1235);
    res.send 
});

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id',controller.get);

router.post('/create', validate.postCreate, controller.postCreate);


module.exports = router;

