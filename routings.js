const express = require('express');
const router = express.Router();
const loginController = require('./app/controllers/loginController');
const User = require('./app/models/user.model');

router.post('/login', loginController.login)

//all users
router.get('/login', (req, res) => {
	User.find()
	.exec()
	.then(users => res.json(users))
	.catch(err => res.status(500).json(err))
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