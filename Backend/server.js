import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Feedback from "./models/feedback.js"; // ✅ Import here
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection (Atlas)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Feedback Schema
// const feedbackSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   mobile: { type: String, required: true },
//   subject: { type: String, required: true },
//   foundVia: { type: String, required: true },
//   suggestions: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// ✅ Feedback Model
// const Feedback = mongoose.model("Feedback", feedbackSchema);

// ✅ Routes
// app.get("/", (req, res) => {
//   res.send("🚀 Feedback API is running...");
// });

app.post("/api/feedback", async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body); // uses imported model
    await newFeedback.save();
    res.status(201).json({ message: "✅ Feedback saved successfully!" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "❌ Failed to save feedback" });
  }
});

// Fetch all feedback (optional, for admin panel)
// app.get("/api/feedback", async (req, res) => {
//   try {
//     const feedbacks = await Feedback.find().sort({ createdAt: -1 });
//     res.json(feedbacks);
//   } catch (error) {
//     res.status(500).json({ error: "❌ Failed to fetch feedback" });
//   }
// });

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
