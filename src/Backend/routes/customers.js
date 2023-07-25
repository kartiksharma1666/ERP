const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middlewares/fetchuser');
const JWT_SIGN = 'thisIsMySignature';

// Create a new customer
router.post('/createCustomer', [
  body('name').isString().isLength({ min: 2 }),
  body('email').isEmail(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const customer = await Customer.create({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      town: req.body.town,
      pin: req.body.pin,
      phone: req.body.phone,
    });

    res.json({ success: true, customer });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
});

// Get all customers
router.get('/getCustomers', async (req, res) => {
  try {
    const customers = await Customer.find().select('-password');
    res.json(customers);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
});

// Get customer by ID
router.get('/getCustomer/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const customer = await Customer.findById(customerId).select('-password');

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json(customer);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
});

// Update customer details
router.put('/updateCustomer/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const updatedData = {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      town: req.body.town,
      pin: req.body.pin,
      phone: req.body.phone,
    };

    const customer = await Customer.findByIdAndUpdate(customerId, updatedData, {
      new: true,
    });

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json({ success: true, customer });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
});

// Delete customer
router.delete('/deleteCustomer/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const customer = await Customer.findByIdAndDelete(customerId);

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json({ success: true, message: 'Customer deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
