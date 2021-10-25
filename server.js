'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

const inputRouter = require('./routers/input');

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.json());

// Connect to MongoDB

const mongoUrl = process.env['MONGODB_URI_LOCAL'];
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Start Express server
    app.listen(app.get('port'), () => {
      console.log('  App is running at http://localhost:%d', app.get('port'));
      console.log('  Press CTRL-C to stop\n');
    });
  })
  .catch((err) => {
    console.log(
      'MongoDB connection error. Please make sure MongoDB is running. ' + err
    );
    process.exit(1);
  });

// All Routers
app.use('/api/v1/input', inputRouter);
