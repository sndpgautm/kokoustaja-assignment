'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const InputSchema = new Schema({
  input: {
    type: String,
    index: true,
    required: true,
  },
});

module.exports = mongoose.model('input', InputSchema);
