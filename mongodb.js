const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const databaseName = "employee";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(databaseName);
  return db.collection("inventory");
}

module.exports=dbConnect
