const express = require("express");
const router = express.Router();

const {
  createProgram,
  getProgram,
  getPrograms,
  deleteProgram,
  updateProgram,
} = require("../controllers/programController");

//get all programs
router.get("/", getPrograms);

//get a program
router.get("/:id", getProgram);

//create a program
router.post("/", createProgram);

//delete a program
router.delete("/:id", deleteProgram);

//update a program
router.patch("/:id", updateProgram);

module.exports = router;
