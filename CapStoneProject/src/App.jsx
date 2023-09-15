import React from "react";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/Authentication/Authentication";
const Shop = () => {
  return (
    <div>
      <h1>Hello This is Shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
