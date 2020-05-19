const express = require('express');
const controller = require('../controllers/filesController');
const router = express.Router();

router.get('/files/', controller.getAllFiles);
router.get('/:id', controller.getFileById);
// router.post('/:id', controller.createFile);
// router.put('/:id', controller.updateFile);
router.delete('/:id', controller.removeFile);

module.exports = router;