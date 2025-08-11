const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    required: true,
  },
  ProductPrice: {
    type: Number,
    required: true,
  },
  ProductBarcode: {
    type: Number,
    required: true,
  },
});

const products = mongoose.model("Products", productSchema);
module.exports = products;
