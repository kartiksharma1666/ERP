// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  town: {
    type: String,
  },
  pin: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
