const router = require('express').Router();
const adventures = require('../models/adventures.json');

router.get("/", (req, res) => {
  return res.status(200).json(adventures);
})

module.exports = router;