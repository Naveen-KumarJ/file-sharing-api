# 📁 File Sharing API - Node.js + Express + MongoDB

This is a RESTful API built using Node.js, Express, Multer, and MongoDB for uploading, sharing, and downloading files. It is ideal for use in resume upload portals, document sharing platforms, and file delivery tools.

---

## 📦 Features

- Upload files and save metadata
- Generate shareable links using file ID
- Download uploaded files via unique endpoints
- Stores file data in MongoDB using Mongoose
- Saves files locally to the `Uploaded-Files/` folder

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Multer** (for file uploads)
- **UUID** (for unique file naming)

---

## 🚀 API Endpoints

### 📤 Upload File
```

POST /api/v1/file/upload

````
- **Form field**: `resume` (type: file)
- **Body**: `user` (optional)
- **Response**:
```json
{
  "success": true,
  "message": "File Uploaded Successfully"
}
````

---

### 🔗 Share File

```
POST /api/v1/file/share
```

* **Body**:

```json
{
  "_id": "fileId_from_upload"
}
```

* **Response**:

```json
{
  "success": true,
  "link": "http://localhost:8080/files/<fileId>"
}
```

---

### 📥 Download File

```
GET /files/:fileId
```

* Downloads the file with the original name.

---

## 📁 Folder Structure

```
project-root/
│
├── controllers/
│   └── file.controller.js
│
├── middlewares/
│   └── fileUpload.js
│
├── models/
│   └── file.model.js
│
├── routes/
│   └── file.routes.js
│
├── Uploaded-Files/
│   └── [uploaded files]
│
├── app.js (or index.js)
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/file-sharing-api-nodejs.git
cd file-sharing-api-nodejs
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up MongoDB**

* Use MongoDB Atlas or your local MongoDB instance
* Replace the connection string in your `app.js` file

4. **Run the server**

```bash
node app.js
```

---

## 🧪 Example cURL (Upload)

```bash
curl -X POST http://localhost:8080/api/v1/file/upload \
  -F "resume=@/path/to/your/file.pdf" \
  -F "user=john@example.com"
```