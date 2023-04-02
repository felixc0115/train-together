const express = require("express");
const router = express();
const {
  signupUser,
  loginUser,
  favoriteProgram,
} = require("../controllers/userController");

//add program to favorites
router.patch("/", favoriteProgram);

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

module.exports = router;
