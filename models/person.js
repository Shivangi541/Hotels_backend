const mongoose = require("mongoose");

//define the person schema
const person = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },

  salary: {
    type: Number,
    required: true,
  },
});

// make model out of the schema

const model = mongoose.model("Person", person);
module.exports = model;
