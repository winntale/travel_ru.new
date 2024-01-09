const express = require("express");
const authController = require('../controllers/auth')

const router = express.Router();

router.post('/register', authController.register);
router.post('/auth', authController.auth);
router.post('/profile', authController.auth);
// router.post('/profile', authController.chngName);

module.exports = router;
