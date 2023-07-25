const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middlewares/fetchuser');
const JWT_SIGN = "thisIsMySignature";

// Create a new user
router.post('/createUser', [
  body('name').isString().isLength({ min: 2 }), 
  body('email').isEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      town: req.body.town,
      pin: req.body.pin,
      phone: req.body.phone,
      password: hashedPassword
    });

    const data = {
      user: {
        id: user.id
      }
    }

    const token = jwt.sign(data, JWT_SIGN);
    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

// User login
router.post('/login', [
  body('email').isEmail(),
  body('password', "Enter Valid password").exists()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ error: "Wrong Credentials" });
      return;
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      res.status(400).json({ success: false, error: "Wrong credentials" });
      return;
    }

    const data = {
      user: {
        id: user.id
      }
    }

    const token = jwt.sign(data, JWT_SIGN);
    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
});

// Get user details
router.get('/getuser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("Internal server error");
  }
});

// Update user details
router.put('/updateuser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    // Your code to update user details here...
    res.send("User details updated successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

// Delete user
router.delete('/deleteuser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    // Your code to delete user here...
    res.send("User deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
