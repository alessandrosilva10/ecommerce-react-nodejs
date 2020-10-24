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
    update,
    remove,
    list
} = require('../controllers/category');

router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.put('/category/:categoryId/:userId', update, isAuth, isAdmin, requireSignin);
router.delete('/category/:categoryId/:userId', remove, isAuth, isAdmin, requireSignin);
router.get('/categories', list);

router.param('userId', userById);
router.param('categoryId', categoryById);

module.exports = router;