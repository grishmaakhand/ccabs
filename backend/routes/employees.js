const express = require("express");
const router = express.Router();
const empControllers = require("../controllers/emp-controllers");

router.post("/emp", empControllers);

module.exports = router;
