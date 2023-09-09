const mongoose = require("mongoose");

const taleSchema = new mongoose.Schema({
  url: { type: String, required: false },
  path: { type: String, required: false },
  name: { type: String, required: true },
  status: { type: String, required: true },
  active: { type: Boolean, required: true },
});

module.exports = mongoose.model('Tale', taleSchema);