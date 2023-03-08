const express = require("express");
const {
  createProgram,
  getProgram,
  getPrograms,
} = require("../controllers/programController");
const router = express.Router();

//get all workouts
router.get("/", getPrograms);

router.get("/:id", getProgram);

router.post("/", createProgram);

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new program" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new program" });
});

module.exports = router;
