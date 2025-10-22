
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./studentRoutes");
const gradeRoutes = require("./gradeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/students", studentRoutes);
app.use("/api/grades", gradeRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
