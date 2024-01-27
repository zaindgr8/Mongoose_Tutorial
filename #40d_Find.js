const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-com");

const productSchema = new mongoose.Schema({
  name: String,
  year: Number,
});

const findInDb = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find();
  console.log(data);
};
findInDb();
