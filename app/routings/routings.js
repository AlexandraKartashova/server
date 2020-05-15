const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const registrController = require('../controllers/registrController');
const fileController = require('../controllers/fileController');
const userRouts = require('./userRouts');
const User = require('../models/user.model');
const controller = require('../controllers/userController');

router.post('/login', loginController.login);
router.post('/register', registrController.register);
router.post('/upload', fileController.file)

//all users
router.get('/login', (req, res) => {
	User.find()
	.exec()
	.then(users => res.json(users))
	.catch(err => res.status(500).json(err))
})

router.use('/user/_id', userRouts);

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