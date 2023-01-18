import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-6jg4qqlte2a5h6bt.us.auth0.com
// DvJFHAE8GINZv4C5EEu4x0QNiZpnfhHF

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
  domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
    <ProductsProvider>
    <FilterProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
