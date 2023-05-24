const fs = require('fs');
const path = require('path');

function saveSVGToFile(svgString, fileName) {
  const folderPath = path.join(__dirname, '..', 'logos'); // Path to the logos folder
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
  const filePath = path.join(folderPath, fileName);
  fs.writeFileSync(filePath, svgString);
}

module.exports = { saveSVGToFile };
