const express = require('express');
const Student = require('../models/Student');
const Courses = require('../models/Course');

// initialize router object
const router = express.Router();

// GET route for stories
router.get('/stories', (req, res) => {
  res.json({ msg: "This should show all the courses" });
});

// GET route for completed courses
router.get('/courses/:status', async (req, res) => {
  // check the params or query for the courses to get
});

// GET route for ongoing courses
router.get('/courses/:status', async (req, res) => {
  // check the params or query for the courses to get
});

// GET route for student profile
router.get('/profile', async (req, res) => {

});

// export the router object
module.exports = router;