require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Correct: use environment variable
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.log("Error:", error));

// Schema
const bmiSchema = new mongoose.Schema({
  weight: Number,
  height: Number,
  bmi: Number,
  date: { type: Date, default: Date.now }
});

// Model
const BMIRecord = mongoose.model("BMIRecord", bmiSchema);

// API to save BMI
app.post("/save-bmi", async (req, res) => {
  const { weight, height, bmi } = req.body;
  try {
    await BMIRecord.create({ weight, height, bmi });
    res.json({ message: "BMI saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save" });
  }
});

// Start server
app.listen(process.env.PORT || 5000, () =>
  console.log("Backend running on port", process.env.PORT || 5000)
);
