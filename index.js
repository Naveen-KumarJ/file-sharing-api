const express = require("express");
const dotenv = require('dotenv');
const fileRoutes = require("./routes/file.route.js");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = 8080;


app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected Successfully"))
  .catch((error) => console.log("DB Connection Failed", error));

app.use(fileRoutes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
