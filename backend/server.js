const express = require("express");
const dotenv = require("dotenv")
const app = express();

dotenv.config();

const port = process.env.LOCAL_PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
