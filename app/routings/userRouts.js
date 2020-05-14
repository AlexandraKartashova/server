const express = require('express');
const controller = require('../controllers/userController');
const router = express.Router();

router.put('/:id', controller.updateUser);
router.delete('/:id', controller.removeUser);

module.exports = router;