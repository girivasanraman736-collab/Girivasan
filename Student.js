
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  department: String,
  year: Number,
});

module.exports = mongoose.model("Student", studentSchema);
