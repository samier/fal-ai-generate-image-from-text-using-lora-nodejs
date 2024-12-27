const ImageService = require('../services/ImageService');

exports.generateImage = async (req, res) => {
  try {

    // call the generate image service to generate the image
    const result = await ImageService.generateImage(req.body);

    res.status(200).json({
      success: true,
      data: result
    });
    
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({
      success: false,
      message: 'Error generating image',
      error: error.message
    });
  }
};
