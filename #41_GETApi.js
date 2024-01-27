const express = require("express");
const config = require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
  console.log(data);
});

app.listen(5005);
