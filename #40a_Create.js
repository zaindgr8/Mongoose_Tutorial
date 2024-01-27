const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-com");

const productSchema = new mongoose.Schema({
  name: String,
  year: Number,
});

const saveInDb = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "King",
    year: 2027,
  });
  result = await data.save();
  console.log(data);
};

saveInDb();
