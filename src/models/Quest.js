const mongoose = require("mongoose");

const questSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  active: { type: Boolean, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Quest', questSchema);