import React from "react";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/Authentication/Authentication";

import Shop from "./routes/Shop/Shop";

import CheckOut from "./routes/CheckOut/CheckOut";

const App = () => {
  return (
    
    <>
    <h1>Hello I am Reducer</h1>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
