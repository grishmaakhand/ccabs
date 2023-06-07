const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// MongoDB connection setup
const uri = "npm start";
const client = new MongoClient(uri, { useUnifiedTopology: true });

// API endpoint to fetch data from MongoDB
app.get("/data", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("cads");
    const collection = db.collection("emp");
    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
