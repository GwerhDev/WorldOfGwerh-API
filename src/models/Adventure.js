const mongoose = require("mongoose");

const adventureSchema = new mongoose.Schema({
  url: { type: String, required: false },
  name: { type: String, required: true },
  path: { type: String, required: false },
  image: { type: String, required: true },
  status: { type: String, required: true },
  active: { type: Boolean, required: true },
  background: { type: String, required: true },
});

module.exports = mongoose.model('Adventure', adventureSchema);