const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
