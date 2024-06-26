const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  
  reward: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }],
});

module.exports = mongoose.model('Achievement', achievementSchema);