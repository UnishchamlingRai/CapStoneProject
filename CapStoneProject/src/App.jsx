import React from "react";
import Home from "./routes/Home/Home";
import { Outlet, Route, Routes } from "react-router-dom";
const Shop = () => {
  return (
    <div>
      <h1>Hello This is Shop</h1>
    </div>
  );
};
const Navigation = () => {
  return (
    <div>
      
      <h1>I am Navigation</h1>
      <Outlet />
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
