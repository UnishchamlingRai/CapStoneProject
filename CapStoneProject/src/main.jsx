import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/userContext.jsx";

import { CategoriesProvider } from "./Context/CategoriesContext.jsx";
import { CartProvider } from "./Context/cartContext.jsx";
import {InMemoryCache,ApolloProvider, ApolloClient} from '@apollo/client'
const client=new ApolloClient({
  uri:"https://dummyjson.com/products",
  cache:new InMemoryCache()
})
console.log("client:",client)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
          <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
