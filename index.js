const express=require("express")
const config=require("./config")
const Product=require("./product")

const app= express()
app.use(express.json());

app.put("/update/:_id",async (req, res)=>{
  const data= await Product.updateOne(req.params,{$set:req.body})
res.send(data);
})


app.listen(5005)