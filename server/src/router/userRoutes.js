const express = require("express");
const { createUser, loginUser, checkUser,confirmUser } = require("../controller/userController");
const { validateCreate, validateLogin } = require("../validators/user");
const router = express.Router();
router
  .post("/register", validateCreate, createUser)
  .post("/login", validateLogin, loginUser)
  .get("/check-user/:userid",checkUser)
  .get("/confirm-user/:userid",confirmUser);

   
  

module.exports = router;
