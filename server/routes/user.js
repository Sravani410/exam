const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});


router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    photo: req.body.photo,
    age: req.body.age,
    gender: req.body.gender
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/:id', getUser, async (req, res) => {
  if (req.body.firstName != null) {
    res.user.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.user.lastName = req.body.lastName;
  }
  if (req.body.photo != null) {
    res.user.photo = req.body.photo;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }
  if (req.body.gender != null) {
    res
