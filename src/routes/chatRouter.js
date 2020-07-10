const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getIndex);
router.post('/', chatController.postUsername);



module.exports = router;
