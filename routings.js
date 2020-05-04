const express = require('express');
const router = express.Router();
// const User = require('./user.model');

// router.get('/', async (req,res) => {
// 	const users = await User.find({})
// 	res.send({users});
// })

router.get('/login', (req, res) => {
	res.send({path: 'login'});
})

router.get('/signup', (req, res) => {
	res.send({path: 'signup'});
})

router.get('/profile/user/id', (req, res) => {
	res.send({path: 'profile/user'});
})

router.get('/files', (req, res) => {
	res.send({path: 'files'});
})

router.get('/files/loaded', (req, res) => {
	res.send({path: 'files/loaded'});
})

router.get('/files/downloaded', (req, res) => {
	res.send({path: 'files/downloaded'});
})

router.get('/restore-password', (req, res) => {
	res.send({path: 'restore-password'});
})

module.exports = router;