const express = require("express");
const config = require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(req.body);
  res.send(result);
});

app.listen(5005);
