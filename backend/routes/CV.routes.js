const express = require("express");
const router = express.Router();

const { myCV } = require("../controller/cv.controller");

// endpoint
router.get("/download-cv", myCV);

module.exports = router;