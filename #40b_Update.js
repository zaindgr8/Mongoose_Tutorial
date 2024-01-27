const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-com");

const productSchema = new mongoose.Schema({
  name: String,
  year: Number,
});

const updateInDb = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateMany(
    { name: "King" },
    { $set: { name: "Champ", year: 1996 } }
  );
  console.log(data);
};

updateInDb();
