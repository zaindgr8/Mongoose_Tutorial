const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-com");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
})

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "max 131",
    price: 200,
    brand: "Iphone",
    category: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};
// saveInDB()

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "note 5" },
    {
      $set: { price: 69, name: "New Name" },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "note7" });
  console.log(data);
};

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find();
  console.log(data);
};

findInDB();
