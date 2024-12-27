const { fal } = require('@fal-ai/client');

const generateImage = async (inputData) => {
  try {

    // call the fal-ai/flux-lora api to generate image
    const result = await fal.subscribe("fal-ai/flux-lora", {
      input: inputData,
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          update.logs.map((log) => log.message).forEach(console.log);
        }
      },
    });
    
    return result;  // Return the result to the controller
  } catch (error) {
    throw new Error('Error generating image: ' + error.message);
  }
};

module.exports = {
  generateImage
};