//this file enforces the schema for documents

const { string } = require("i/lib/util");
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Program", programSchema);
