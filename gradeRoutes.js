
const express = require("express");
const Grade = require("./Grade");
const router = express.Router();

router.post("/", async (req, res) => {
  const grade = new Grade(req.body);
  await grade.save();
  res.json(grade);
});

router.get("/", async (req, res) => {
  const grades = await Grade.find().populate("studentId");
  res.json(grades);
});

module.exports = router;
