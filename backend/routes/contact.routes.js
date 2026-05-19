const express = require("express");

const router = express.Router();

const {
  sendMessage,
} = require("../controller/contact.controller");

router.post("/contact", sendMessage);

module.exports = router;