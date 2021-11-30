const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();

const api = process.env.API_URL;

app.get("/api/products", (req, res) => {
  res.send("hello api!");
});

app.listen(port, () => {
  console.log(api);
  console.log(`Server is now running on ${port}`);
});
