const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://sailendra:gautam@cluster0.puuov.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("ecoforest").collections;
  // perform actions on the collection object
  console.log("success");
  client.close();
});
