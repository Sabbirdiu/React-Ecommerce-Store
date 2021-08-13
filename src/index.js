import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products/products_context";
import { FilterProvider } from "./context/filter/filter_context";
ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
