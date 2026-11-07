require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());

// 1. Health Check Endpoint
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Catch-all 404 Handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found." });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});