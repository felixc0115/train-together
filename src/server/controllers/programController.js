const Program = require("../models/programModel");
const mongoose = require("mongoose");

//get all programs
const getPrograms = async (req, res) => {
  const programs = await Program.find({}).sort({ createdAt: -1 });
  res.status(200).json(programs);
};

//get a single program
const getProgram = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such program" });
  }

  const program = await Program.findById(id);

  if (!program) {
    return res.status(404).json({ error: "No such program" });
  }

  res.status(200).json(program);
};

// create a new program
const createProgram = async (req, res) => {
  const {
    username,
    title,
    youtubeLink,
    category,
    durationInMins,
    description,
    exercises,
    timestamp,
  } = req.body;

  // add document to db
  try {
    const program = await Program.create({
      username,
      title,
      category,
      durationInMins,
      youtubeLink,
      description,
      exercises,
      timestamp,
    });
    res.status(200).json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a program
const deleteProgram = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such program" });
  }

  const program = await Program.findOneAndDelete({ _id: id });

  if (!program) {
    return res.status(404).json({ error: "No such program" });
  }

  res.status(200).json(program);
};

//update a program
const updateProgram = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such program" });
  }

  const program = await Program.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!program) {
    return res.status(404).json({ error: "No such program" });
  }

  res.status(200).json(program);
};

module.exports = {
  createProgram,
  getPrograms,
  getProgram,
  deleteProgram,
  updateProgram,
};
