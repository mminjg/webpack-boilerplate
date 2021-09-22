const express = require("express");
const router = express.Router();

// api/users
router.get('/', function(req, res) {
  res.json({ users: [] });
});

module.exports = router;
