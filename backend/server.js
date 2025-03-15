const express = require("express");
const cors = require("cors");
const mobilesData = require("./src/data/mobiles"); // Importing products data
const bannerData = require("./src/data/productBanner"); // Importing banner data
const laptopsData = require("./src/data/laptops")

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Enable JSON parsing

// API Route to get all products
app.get("/api/mobiles", (req, res) => {
  res.json(mobilesData);
});
app.get("/api/banner", (req, res) => {
  res.json(bannerData);
});

app.get("/api/laptop", (req, res) => {
  res.json(laptopsData);
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
