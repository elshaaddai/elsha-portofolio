const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cvRoutes = require('./routes/CV.routes')
const contactRoutes = require('./routes/contact.routes')

const app = express();

app.use(cors());
app.use(express.json());

// route
app.use('/', cvRoutes)
app.post('/contact', contactRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
