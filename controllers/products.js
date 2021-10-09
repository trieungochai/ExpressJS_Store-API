const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "Products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
