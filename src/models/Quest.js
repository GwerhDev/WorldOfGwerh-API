const mongoose = require("mongoose");

const questSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, required: true },
  active: { type: Boolean, required: true },
  completed: { type: Boolean, required: true },
  description: { type: String, required: true },
  
  reward: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }],
});

module.exports = mongoose.model('Quest', questSchema);