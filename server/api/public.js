const express = require('express');
const Student = require('../models/Student');

// initialize router object
const router = express.Router();

// GET route for courses
router.get('/courses', (req, res) => {
  res.json({ msg: "This should show all the courses" });
});

// export the router object
module.exports = router;