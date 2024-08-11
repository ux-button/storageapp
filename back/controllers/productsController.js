const query = require("../db/query");

const getProductsShort = async (req, res, next) => {
  try {
    console.log("Get one");
    const result = await query.getProductsTitle();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getProductsFull = async (req, res, next) => {
  console.log("Get all");
  const { id } = req.params;
  try {
    const result = await query.getProductsAll(id);
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const postNewProduct = async (req, res, next) => {
  const { name, category, material, discription } = req.body;
  console.log(req.body);
  const quantity = 1;
  if (!name || !category || !material || !discription) {
    res.status(400).end();
  }
  try {
    await query.addNewProduct(name, category, material, discription, quantity);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
};

module.exports = { getProductsShort, getProductsFull, postNewProduct };
