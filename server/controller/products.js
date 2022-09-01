const {Products} = require("../models/product");
const addProducts = async (req, res) => {
  try {
    const value = await new Products(req.body).save();
    res.send(value);
  } catch (e) {
    res.send("Name cannot be duplicated");
  }
};
const getProducts = async(req, res) => {
  try {
    const result = await Products.find();
    res.send(result);
  } catch (e) {
    console.error(e);
  }
};
const specificProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Products.findOne({ _id: id });
    res.send(result);
  } catch (e) {
    console.error(e);
  }
};
const updateProduct = async (req, res) => {
  try{
  const value = await Products.updateMany(
    {},
    {$set:{ price: req.body.price} }

  );
  res.send(value);
} catch (e) {
  res.send(e);
}
};
const deleteProduct = async (req, res) => {
  try {
    const value = await Products.deleteOne(req.body);
    res.send(value);
  }
   catch(e){
    res.send(e);
   }
};
module.exports = {
  addProducts,
  getProducts,
  specificProduct,
  updateProduct,
  deleteProduct,
};
