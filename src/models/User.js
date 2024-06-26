const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },

  character: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
});

module.exports = mongoose.model('User', userSchema);