const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-com");

const productSchema = new mongoose.Schema({
  name: String,
  year: Number,
});

const deleteInDb = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteMany({ name: "max 131" });
  console.log(data);
};
deleteInDb();
