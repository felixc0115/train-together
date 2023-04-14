//this file enforces the schema for documents

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const programSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    youtubeLink: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    durationInMins: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    exercises: {
      type: [
        new Schema({
          name: String,
          sets: String,
          repsOrDurationPerSet: String,
          timestamp: String,
        }),
      ],
      default: undefined,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Program", programSchema);
