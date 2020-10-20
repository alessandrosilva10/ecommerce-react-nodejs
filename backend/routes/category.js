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
    categoryById,
    create,
    read,
} = require('../controllers/category');

router.get('/category/:categoryId', read);
router.post('/category/create/:userId', create, isAuth, isAdmin, requireSignin);

router.param('userId', userById);
router.param('categoryId', categoryById);

module.exports = router;