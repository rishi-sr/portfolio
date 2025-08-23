import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas connection
mongoose.connect(
  "mongodb+srv://rishisrivastava1910:RSRI%401910@portfolio.3yx76fv.mongodb.net/myportfolio?retryWrites=true&w=majority&appName=portfolio"
)
.then(() => console.log("✅ MongoDB Atlas Connected"))
.catch(err => console.error("❌ DB Connection Error:", err));

app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  })
})

// 📌 Schema for "projects" collection
const projectSchema = new mongoose.Schema({
  name: String,
  url: String,
  link: String,
  p: String,
  skills: [String],
});

// 🔗 Explicitly tell Mongoose to use "projects" collection
const Project = mongoose.model("myportfolio", projectSchema, "projects");

// 📌 GET all projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 POST new project
app.post("/api/projects", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
