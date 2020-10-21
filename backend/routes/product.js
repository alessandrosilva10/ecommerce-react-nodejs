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
    productById,
    create,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch
} = require('../controllers/product');

router.get('/product/:productId', read);
router.post('/product/create/:userId', create, isAuth, isAdmin, requireSignin);
router.delete('/product/:productId/:userId', remove, isAuth, isAdmin, requireSignin);
router.put('/product/:productId/:userId', update, isAuth, isAdmin, requireSignin);
router.get('/products', list);
router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);
router.post("/products/by/search", listBySearch);
router.param('userId', userById);
router.param('productId', productById);

module.exports = router;