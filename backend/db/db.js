const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const dbURL = process.env.MONGODB_URL;

const Connection = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

      socketTimeoutMS: 30000,
    });
    console.log("MongoDB is connected to the server");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

module.exports = Connection;
