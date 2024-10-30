// backend/routes/projects.js
const express = require('express');
const Project = require('../models/mani'); // Ensure this path is correct

const router = express.Router();

// GET route to fetch all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch projects from the database
    res.json(projects); // Respond with the list of projects in JSON format
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle any errors
  }
});

module.exports = router; // Export the router
