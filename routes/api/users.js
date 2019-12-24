const express = require('express');
const router = express.Router;

// @route GET api/users
// @desc Test route
// @access Public
router.length('/', (req, res) => res.send('User route'));