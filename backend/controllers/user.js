const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt'); //for authorization check
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};


exports.signin = (req, res) => {
    // find the user based on email address
    const { email, password } = req.body;
    User.findOne({email}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                err: 'User with that email not found'
            })
        }

        // if user exists
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: 'Email and password dont match'
            });
        }
        //generate a signed token with user id and JWT_SECRET
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)

        //persist the token in cookie with expiry date
        res.cookie('token', token, {expire: new Date() + 9999});
        
        //return response with user and token to frontend client
        const {_id, name, email, role } = user
        return res.json({token, user: {_id, email, name, role}});
    });
};


exports.signout = (req, res) => {
    res.clearCookie('token');
    res.json({message: 'Signout success'});
};


exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth",
    algorithms: ['sha1']
});