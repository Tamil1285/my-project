const express = require("express");
const { getUsers, createUser } = require("../controllers/userController"); // ✅ Check this!

const router = express.Router();

// Define routes
router.get("/", getUsers); // Ensure `getUsers` is correctly imported
router.post("/", createUser); // Ensure `createUser` is correctly imported

module.exports = router;
