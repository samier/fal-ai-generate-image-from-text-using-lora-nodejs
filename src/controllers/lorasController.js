const fs = require('fs');

exports.getLorasList = async (req, res) => {
  try {

    // get loras from loras.json constant file 
    const data = JSON.parse(fs.readFileSync('src/constants/loras.json', 'utf8'));
    
    res.json(data);

  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

