const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Complaints endpoint working!');
});

module.exports = router; // ✅ Correct export

