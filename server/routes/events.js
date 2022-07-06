const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();

//event routes
router.get("/", eventController.getEvents);
router.post("/new", eventController.postEvents);
module.exports = router;
