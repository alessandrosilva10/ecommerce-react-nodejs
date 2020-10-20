const express = require('express');
const router = express.Router();

const { 
    isAuth,
    isAdmin,
    requireSignin,
} = require('../controllers/auth');

const { 
    userById,
} = require('../controllers/user');

const { 
    create
} = require('../controllers/product');

router.post('/product/create/:userId', create, isAuth, isAdmin, requireSignin);

router.param('userId', userById)

module.exports = router;