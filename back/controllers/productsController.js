const query = require("../db/query");

const getProductsShort = async (req, res, next) => {
  try {
    const result = await query.getProductsTitle();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getProductsFull = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await query.getProductsAll(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getProductsShort, getProductsFull };
