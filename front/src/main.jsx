import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage.jsx";
import { StoragePage } from "./pages/StoragePage.jsx";
import "./index.css";
import { EditProductPage } from "./pages/EditProductPage.jsx";
import { NewProductPage } from "./pages/NewProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StoragePage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/edit",
    element: <EditProductPage />,
  },
  {
    path: "/new",
    element: <NewProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
