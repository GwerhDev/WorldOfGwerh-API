const router = require('express').Router();
const { decodeToken } = require('../integrations/jwt');
const userSchema = require('../models/User');

router.get("/account/:token", async(req, res) => {
  try {
    const { token } = req.params;
    const decodedToken = await decodeToken(token);
    return res.status(200).send(decodedToken.data);
    
  } catch (error) {
    return res.status(400);
  }
})

module.exports = router;