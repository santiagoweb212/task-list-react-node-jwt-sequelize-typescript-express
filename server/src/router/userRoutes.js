const express = require("express");
const { createUser, loginUser } = require("../controller/userController");
const { validateCreate, validateLogin } = require("../validators/user");
const router = express.Router();
router
  .post("/register", validateCreate, createUser)
  .post("/login", validateLogin, loginUser);

module.exports = router;
