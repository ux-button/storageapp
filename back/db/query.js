const { pool } = require("../db/pool");

const getProductsTitle = async () => {
  const { rows } = await pool.query("SELECT id, name, quantity FROM products");
  return rows;
};

const getProductsAll = async (id) => {
  const { rows } = await pool.query("SELECT * FROM products WHERE id=($1)", [
    id,
  ]);
  return rows;
};

const addNewProduct = async (
  name,
  category,
  material,
  discription,
  quantity
) => {
  await pool.query(
    "INSERT INTO products (name, category, material, discription, quantity) VALUES ($1, $2, $3, $4, $5)",
    [name, category, material, discription, quantity]
  );
};

const editProduct = async (
  id,
  name,
  category,
  material,
  discription,
  quantity
) => {
  await pool.query(
    "UPDATE products SET name=($2), category=($3), material=($4), discription=($5), quantity=($6) WHERE id=($1)",
    [id, name, category, material, discription, quantity]
  );
};

module.exports = {
  getProductsTitle,
  getProductsAll,
  addNewProduct,
  editProduct,
};
