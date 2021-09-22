const express = require("express");
const router = express.Router();

// api/products
router.get('/', function(req, res) {
  res.json({ products: [] });
});

// api/products/:id
router.get('/:id', function(req, res) {
  res.json({ id: req.params.id });
});

module.exports = router;
