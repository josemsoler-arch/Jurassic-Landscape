const express = require("express");
const router = express.Router();

// GET all leads (admin)
router.get("/", async (req, res) => {
  try {
    res.json({ message: "Leads endpoint - coming soon" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new lead
router.post("/", async (req, res) => {
  try {
    res.json({ message: "Lead created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
