'use strict';

// Load Input Model
const Input = require('../models/Input');

// Return List of all Inputs or Input by query
exports.findAll = (req, res) => {
  const searchText = req.query.text;
  searchText
    ? Input.find({ input: { $regex: searchText, $options: 'i' } })
        .exec()
        .then((inputs) => res.json(inputs))
        .catch((err) =>
          res.status(404).json({ noInputsFound: 'No Input found' })
        )
    : Input.find()
        .then((inputs) => res.json(inputs))
        .catch((err) =>
          res.status(404).json({ noInputsFound: 'No Input found' })
        );
};

exports.createInput = (req, res) => {
  const newinput = new Input({
    input: req.body.input,
  });

  newinput.save().then((input) => {
    res.json(input);
  });
};
