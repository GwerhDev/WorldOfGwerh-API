const router = require('express').Router();
const taleSchema = require('../models/Tale');

router.get("/", async(req, res) => {
  const tales = await taleSchema.find();
  return res.status(200).json(tales);
})

module.exports = router;