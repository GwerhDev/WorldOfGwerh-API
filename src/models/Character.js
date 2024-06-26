const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  class: { type: String, required: true },
  credits: { type: Number, required: true },
  appearence: { type: String, required: true },

  skin: [{ type: String, ref: 'Skin' }],
  quest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quest' }],
  reward: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }],
  payment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
  achievement: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Achievement' }],
});

module.exports = mongoose.model('Character', characterSchema);