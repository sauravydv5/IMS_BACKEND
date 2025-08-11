const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI, {});
};

module.exports = connectDB;
