const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authToken = require('../middlewares/authToken');


router.post("/verifyOtp", userController.verifyOtp);
router.post("/login", userController.login);
router.post("/logout", authToken, userController.logout);



module.exports = router;  