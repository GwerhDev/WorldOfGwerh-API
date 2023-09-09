const router = require('express').Router();
const { createToken } = require('../integrations/jwt');
const { message } = require('../messages');
const userSchema = require('../models/User');
const bcrypt = require("bcrypt");

router.post('/', async(req,res) => { 
  try {
    const { username, password } = req.body;
    const user = await userSchema.findOne({ username });
    if(!user) return res.status(400).send({error: message.login.failure});

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch) {
      const { _id, username, email, status, role } = user;
      const data = { _id: _id.toString(), username, email, status, role };
      const token = await createToken(data, 3);
      
      return res.status(200).send({ token });

    } else {
      return res.status(400).send({ error: message.login.error });
    };
    
  } catch(error) {
    return res.status(400).send({ error: message.login.error });
  }
});

module.exports = router;