const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

//initialize reg&&login routes
router.post("/register",authController.registerUser);
router.get("/login",authController.loginUser);

module.exports = router;