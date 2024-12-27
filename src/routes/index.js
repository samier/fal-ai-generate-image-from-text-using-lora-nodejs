const express = require('express');
const lorasRoutes = require('./lorasRoutes');
const imageRoutes = require('./imageRoutes');

const router = express.Router();

// loras routes
router.use('/loras', lorasRoutes);

// generate image routes
router.use('/generate-image', imageRoutes);

module.exports = router;