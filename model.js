const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    duration: { type: Number, required: true },
    products: { type: String },
    status: { type: String }
  });

  module.exports = mongoose.model('Order', orderSchema);