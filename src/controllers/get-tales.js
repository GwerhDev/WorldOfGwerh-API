const router = require('express').Router();
const tales = require('../models/tales.json');

router.get("/", (req, res) => {
  return res.status(200).json(tales)
})

module.exports = router;