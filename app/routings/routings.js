const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const registrController = require('../controllers/registrController');
const fileController = require('../controllers/filesController');

router.post('/login', loginController.login);
router.post('/register', registrController.register);
router.post('/files', fileController.createFile)

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