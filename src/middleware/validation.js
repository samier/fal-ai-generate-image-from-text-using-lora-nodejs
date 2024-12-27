const { body, validationResult } = require('express-validator');

// generate image request validator
const imageValidationRules = () => {
  return [
    // Prompt validation (required)
    body('prompt')
      .notEmpty()
      .withMessage('Prompt is required')
      .isString()
      .withMessage('Prompt must be a string'),

    // Image size validation (optional)
    body('image_size')
      .optional()
      .isIn(["", "square", "square_hd", "portrait_4_3", "portrait_16_9", "landscape_4_3", "landscape_16_9"])
      .withMessage('Image size must be one of: "square", "square_hd", "portrait_4_3", "portrait_16_9", "landscape_4_3", "landscape_16_9"'),

    // Num inference steps validation (optional)
    body('num_inference_steps')
      .optional()
      .isInt({ min: 1, max: 50 })
      .withMessage('Num inference steps must be between 1 and 50'),

    // Guidance scale validation (optional)
    body('guidance_scale')
      .optional()
      .isFloat({ min: 0, max: 20 })
      .withMessage('Guidance scale must be between 0 and 20'),

    // Num images validation (optional)
    body('num_images')
      .optional()
      .isInt({ min: 1, max: 4 })
      .withMessage('Num images must be between 1 and 4'),

    // Loras array validation (optional)
    body('loras')
      .optional()
      .isArray()
      .withMessage('Loras must be an array')
      .custom((loras) => {
        return loras.every(lora => 
          typeof lora.path === 'string' && 
          typeof lora.scale === 'number' && 
          lora.scale >= 0 && lora.scale <= 4
        );
      })
      .withMessage('Each lora must have a path (string) and scale (number between 0 and 4)'),

    // Negative prompt validation (optional)
    body('negative_prompt')
      .optional()
      .isString()
      .withMessage('Negative prompt must be a string if provided'),
  ];
};

// Middleware to check for validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

module.exports = { imageValidationRules, validate };
