const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


router.post("/verifyOtp", userController.verifyOtp);
router.post("/login", userController.verifyOtp);



module.exports = router;  