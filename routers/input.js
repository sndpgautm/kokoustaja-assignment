'use strict';
const express = require('express');
const router = express.Router();
const { findAll, createInput } = require('../controllers/input');

// Every path we define here will get /api/v1/input prefix

// Example query /api/v1/input?text=blah
router.get('/', findAll);

router.post('/', createInput);

module.exports = router;
