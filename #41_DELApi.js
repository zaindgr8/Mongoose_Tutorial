const express = require("express");
const config = require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.delete("/delete/:_id", async (req, res) => {
  let data = await Product.deleteOne(req.params);
  console.log(req.params);
  res.send(data);
});

app.listen(5005);
