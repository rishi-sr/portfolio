import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());

// connect to MongoDB Atlas
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// schema
const projectSchema = new mongoose.Schema({
  name: String,
  url: String,
  link: String,
  p: String,
  skills: [String]
});

const Project = mongoose.model("Project", projectSchema);

// API endpoint
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.listen(5000, () => console.log("Server running on port 5000"));
