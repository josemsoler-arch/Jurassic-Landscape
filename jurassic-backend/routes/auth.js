const express = require("express");
const router = express.Router();

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    res.json({ message: "Auth endpoint - coming soon" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
