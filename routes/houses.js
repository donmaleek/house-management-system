// routes/houses.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Post a new house
router.post('/', (req, res) => {
  const { agent_id, name, description, location } = req.body;
  const query = 'INSERT INTO houses (agent_id, name, description, location) VALUES (?, ?, ?, ?)';
  db.query(query, [agent_id, name, description, location], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'House posted successfully' });
  });
});

// Fetch all houses
router.get('/', (req, res) => {
  const query = 'SELECT * FROM houses';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

module.exports = router;
