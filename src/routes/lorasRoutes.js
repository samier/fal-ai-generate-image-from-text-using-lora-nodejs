const express = require('express');
const { getLorasList } = require('../controllers/lorasController');

const router = express.Router();

// loras list api
router.get('/list', getLorasList);

module.exports = router;