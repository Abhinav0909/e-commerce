const express = require("express");
const productsRouter = express();
const {
  addProducts,
  getProducts,
  specificProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/products");
productsRouter.post("/add", addProducts);
productsRouter.get("/allproducts", getProducts);
productsRouter.get("/product/:id", specificProduct);
productsRouter.delete("/deleteProduct", deleteProduct);
productsRouter.patch("/update", updateProduct);
module.exports = productsRouter;
