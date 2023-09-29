import React from "react";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/Authentication/Authentication";

import Shop from "./routes/Shop/Shop";

import CheckOut from "./routes/CheckOut/CheckOut";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";

import {  useEffect } from "react";
import {  onAuthStateChangedListner,createUserDocumentFromAuth } from "./utils/firebase/firebase";

const App = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    let unsuscribe = onAuthStateChangedListner((user) => {
      dispatch(setCurrentUser(user))
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // console.log("Listner User: ", user);
    });

    // console.log("Unsuscribe:", unsuscribe);

    return unsuscribe;
  }, []);

  // const dispatch=useDispatch()
  return (
    <>
      <h1>Hello I am Redux Saga</h1>

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
