
const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  subject: String,
  marks: Number,
  grade: String,
});

module.exports = mongoose.model("Grade", gradeSchema);
