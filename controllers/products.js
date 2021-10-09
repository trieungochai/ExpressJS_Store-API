const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = res.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let result = Product.find(queryObject);
  // sort
  if (sort) {
    const sortList = sort.split(",").join("");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  // select
  if (fields) {
    const fieldsList = fields.split(",").join("");
    result = result.select(fieldsList);
  }

  // console.log(queryObject);
  const products = await Product.find(req.query);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
