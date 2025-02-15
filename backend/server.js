const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");

const app = express();
const port = process.env.LOCAL_PORT;

dotenv.config();

// DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.listen(port, () => {
  console.log(`✅ App listening on port ${port}`);
});
