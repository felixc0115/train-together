const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const programSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});
