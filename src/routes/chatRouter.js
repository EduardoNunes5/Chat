const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/join', chatController.getJoin);
router.get('/', chatController.getIndex);


module.exports = router;
