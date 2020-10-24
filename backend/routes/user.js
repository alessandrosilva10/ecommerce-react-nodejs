const express = require('express');
const router = express.Router();

const { 
    isAuth,
    isAdmin,
    requireSignin
} = require('../controllers/auth');

const { 
    userById,
    read,
    update,
    isAdminValidation
} = require('../controllers/user');

// Admin Validator
router.get('/secret/:userId', requireSignin, isAuth, isAdmin, isAdminValidation);

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);

router.param('userId', userById)

module.exports = router;