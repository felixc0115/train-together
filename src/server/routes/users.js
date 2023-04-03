const express = require("express");
const router = express();
const {
  signupUser,
  loginUser,
  favoriteProgram,
} = require("../controllers/userController");

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

//add program to favorites
router.patch("/", favoriteProgram);

module.exports = router;
