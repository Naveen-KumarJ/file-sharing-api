const express = require("express");
const { uploadFile, shareFile, downloadFile } = require("../controllers/file.controller.js");
const uploader = require("../middlewares/fileUpload.js");
const router = express.Router();

router.post("/api/v1/file/upload", uploader.single("resume"),uploadFile);
router.post("/api/v1/file/share", shareFile);
router.get('/files/:fileId', downloadFile)

module.exports = router;
