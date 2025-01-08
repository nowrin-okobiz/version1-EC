require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const app=express()

//middleware 
app.use(express.json());
app.use(cors())

// mongodb connection
// version1-EC
// 754P42pi40ZA2tYT

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mghj8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(process.env.DB_USER,process.env.DB_PASSWORD)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const database = client.db("version1-EC");
    const categoryCollection=database.collection('category')
    
    // APIs are integrated start 
    app.get('/category',async(req,res)=>{
      const result= await categoryCollection.find().toArray()
      res.send(result)
    })
    // APIs are integrated end 


  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();


  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("simple CURD is running");
});

app.listen(port, () => {
  console.log(`simple curd running on ${port}`);
});
