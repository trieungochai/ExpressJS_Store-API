const getAllProductsStatic = (req, res) => {
  throw new Error("Testing async error");
  res.status(200).json({ msg: "Products testing route" });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "Products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
