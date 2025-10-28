const express = require("express");
const router = express.Router();

// ✅ Signup route (for your Signup.jsx)
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  res.json({
    message: "Signup successful!",
    user: { name, email },
  });
});

// ✅ Login route (for your Login.jsx)
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({
    message: "Login successful!",
    user: { name: "Demo User", email },
    token: "dummy-token",
  });
});

module.exports = router;
