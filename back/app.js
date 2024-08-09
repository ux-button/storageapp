const express = require("express");
const app = express();

const {
  getProductsShort,
  getProductsFull,
} = require("./controllers/productsController");

app.use(express.json());
app.use(getProductsShort, getProductsFull);

app.get("/api/products", getProductsShort);
app.get("/api/products/:id", getProductsFull);

// Error hendler
app.use((err, req, res, next) => {
  res.status(400).end();
});

// Server listener
app.listen(5123, () => {
  console.log("Server running in port 5123...");
});
