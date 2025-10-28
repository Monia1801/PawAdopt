// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const authRoutes = require("./routes/authRoutes"); // Import your routes

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug log to confirm MONGO_URI is loaded
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("🐾 PawAdopt Backend is running successfully!");
});

// Routes
app.use("/api", authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
