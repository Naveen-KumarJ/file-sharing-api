const fileModel = require("../models/file.model");

const uploadFile = async (req, res) => {
  console.log(req.file);
  try {
    await fileModel.create({
      originalFileName: req.file.originalname,
      modifiedFileName: req.file.filename,
      size: req.file.size,
      user: req.body.user,
      path: req.file.path,
    });
    res.json({
      success: true,
      message: "File Uploaded Successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Uploading File Failed" + error,
    });
  }
};

const shareFile = async (req, res) => {
  console.log(req.body);
  try {
    const link = `http://localhost:8080/files/${req.body._id}`;
    const file = await fileModel.findById(req.body._id);
    if (!file) {
      throw new Error("Invalid file Id");
    }
    res.json({
      success: true,
      message: "File Share API",
      link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid File Id",
    });
  }
};

const downloadFile = async (req, res) => {
  const file = await fileModel.findById(req.params.fileId);
  res.download(file.path, file.originalFileName);
  return;
};
const fileController = {
  uploadFile,
  shareFile,
  downloadFile
};

module.exports = fileController;
