const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
};

const {
  getProductsShort,
  getProductsFull,
  postNewProduct,
} = require("./controllers/productsController");

// Addons
app.use(express.json());
app.use(cors(corsOptions));

// Add controllers
//app.use(getProductsShort, getProductsFull, postNewProduct);

app.post("/api/new", postNewProduct);
app.get("/api/products", getProductsShort);
app.get("/api/products/:id", getProductsFull);

// Error hendler
app.use((err, req, res, next) => {
  res.status(400).end();
});

// Server listener
// Port 5123
app.listen(5123, () => {
  console.log("Server running in port 5123...");
});
