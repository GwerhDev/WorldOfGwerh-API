const router = require('express').Router();
const adventureSchema = require('../../models/Adventure');

router.post("/", async(req, res) => {
  const adventureData = req.body;
  const response = await adventureSchema.create(adventureData);
  console.log(response)
  return res.status(200).json(response);
});

module.exports = router;