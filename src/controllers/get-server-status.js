const { message } = require('../messages');

const router = require('express').Router();

router.get('/', (req,res) => { 
  res.status(200).send({ status: true, message: message.server.connectingServer })
});

module.exports = router;