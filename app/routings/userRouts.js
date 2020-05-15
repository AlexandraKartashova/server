const express = require('express');
const controller = require('../controllers/userController');
const router = express.Router();

router.get('/_id', controller.getUserById);
// router.post('_/id', controller.createUser);
router.put('/_id', controller.updateUser);
router.delete('/_id', controller.removeUser);

module.exports = router;