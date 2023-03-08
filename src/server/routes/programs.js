const express = require("express");
const router = express.Router();

//get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all programs" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET one program" });
});

router.post("/", (req, res) => {
  res.json({ mssg: "POST a new program" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new program" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new program" });
});

module.exports = router;
