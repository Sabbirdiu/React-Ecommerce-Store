import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products/products_context";
import { FilterProvider } from "./context/filter/filter_context";
import { CartProvider } from "./context/cart/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-04d2z9oo.us.auth0.com
// XLvhjxieEOVU3esf1OCwc6yssJXWUrLR
// vWvBOfvVSLzUWTYYLxPFNzNO3ezPbezMxKfwmRugl-QjbPc-NkUra72fEgAqq_yx
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-04d2z9oo.us.auth0.com"
      clientId="XLvhjxieEOVU3esf1OCwc6yssJXWUrLR"
      redirectUri={window.location.origin}
      cacheLocation="loclastorage"
    >
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
