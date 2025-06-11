const multer = require("multer");
const path = require("node:path");
const { v4: uuidv4 } = require('uuid');

const fileStoragePath = path.join(__dirname, "../Uploaded-Files");

const storage = multer.diskStorage({
  destination: fileStoragePath,
  filename: (req, file, cb) => {
    const filename = uuidv4() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const uploader = multer({ storage });
module.exports = uploader;
