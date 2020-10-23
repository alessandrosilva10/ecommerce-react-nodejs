const express = require('express');
const router = express.Router();
const {
    validator
} = require('../controllers/validator');

const { 
    userById,
} = require('../controllers/user');

const { 
    isAuth,
} = require('../controllers/auth');

router.get('/uservalidator', isAuth, validator);
module.exports = router;