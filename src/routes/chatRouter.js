const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getIndex);
router.get('/coisa', chatController.getChat);


module.exports = router;
