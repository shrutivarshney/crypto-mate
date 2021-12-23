const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require('./routes/routes') 
const cors = require("cors");
const port = process.env.PORT || 5000;

dotenv.config()

mongoose.connect(process.env.ATLAS_URI, () => console.log("Database connected successfully")) 

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});