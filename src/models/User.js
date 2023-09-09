const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
  status: { type: String, required: true },
  role: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);