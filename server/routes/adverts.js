const express = require("express");
const advertsController = require("../controllers/advertsController");
const router = express.Router();

//advert routes
router.get("/", advertsController.getAdverts);
router.post("/new", advertsController.postAdverts);
module.exports = router;
