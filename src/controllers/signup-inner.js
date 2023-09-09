const express = require("express");
const router = express.Router();
const userSchema = require("../models/User");
const bcrypt = require("bcrypt");
const { message } = require("../messages");
const { status, role } = require("../utils/consts-user-model");

router.post('/', async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await userSchema.findOne({ email: user.email });

    if(existingUser) {
      const errorToken = { error: message.signup.existinguser }
      return res.status(200).send({errorToken});
    }

    const userData = {
      username: user.username,
      password: user.password,
      email: user.email,
      status: status.active,
      role: role.user
    };

    const salt = await bcrypt.genSalt();
    userData.password = await bcrypt.hash(user.password, salt);

    const newUser = new userSchema(userData);
    await newUser.save();
    return res.status(200).send({msg: message.signup.success});

  } catch (error) {
    return res.status(400).send({error: message.signup.error});
  };
});

module.exports = router;