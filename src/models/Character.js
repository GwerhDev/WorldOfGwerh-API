const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  class: { type: String, required: true },
  quest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quest' }],
});

module.exports = mongoose.model('Character', characterSchema);