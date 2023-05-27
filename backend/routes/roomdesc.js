const express = require("express");
const mongoose = require("mongoose");
const Products = require("../models/productModel");

const app = express();
app.use(express.json());

// mongoose.connect('mongodb://localhost/products_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single product
app.get("/products/:id", getProduct, (req, res) => {
  res.json(res.product);
});

// Create a product
app.post("/products", async (req, res) => {
  const product = new Products(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a product
app.patch("/products/:id", getProduct, async (req, res) => {
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.description != null) {
    res.product.description = req.body.description;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }
  if (req.body.quantity != null) {
    res.product.quantity = req.body.quantity;
  }
  if (req.body.photo != null) {
    res.product.photo = req.body.photo;
  }
  if (req.body.location != null) {
    res.product.location = req.body.location;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
app.delete("/products/:id", getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProduct(req, res, next) {
  let product;
  try {
    product = await Products.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.product = product;
  next();
}

// app.listen(5000, () => {
//   console.log("Server started");
// });
module.exports = app;
