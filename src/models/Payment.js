const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  cvv: { type: String, required: true },
  name: { type: String, required: true },
  method: { type: String, required: true },
  currency: { type: String, required: true },
  cardNumber: { type: String, required: true },
});

module.exports = mongoose.model('Payment', paymentSchema);