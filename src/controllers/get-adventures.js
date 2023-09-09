const router = require('express').Router();
const adventureSchema = require('../models/Adventure');

router.get("/", async(req, res) => {
  const adventures = await adventureSchema.find();
  return res.status(200).json(adventures);
})

module.exports = router;