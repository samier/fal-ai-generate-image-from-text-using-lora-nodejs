const express = require('express');
const { body } = require('express-validator');
const { imageValidationRules, validate } = require('../middleware/validation');
const ImageController = require('../controllers/imageController');

const router = express.Router();

// generate image api
router.post('/',
  imageValidationRules(),
  validate,
  ImageController.generateImage
);

module.exports = router;