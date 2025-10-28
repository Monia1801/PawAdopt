const express = require("express");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
