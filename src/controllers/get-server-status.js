const router = require('express').Router();
const { message } = require('../messages');

router.get('/', (req,res) => { 
  return res.status(200).send({ status: true, message: message.server.connectingServer });
});

module.exports = router;