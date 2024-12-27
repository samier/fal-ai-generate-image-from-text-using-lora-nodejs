const express = require('express');
const cors = require('cors');
const { fal } = require('@fal-ai/client');
require('dotenv').config();
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// FAL Configuration
fal.config({
  credentials: process.env.FAL_API_KEY,
});

// Routes
app.use('/api', routes);

module.exports = app;
