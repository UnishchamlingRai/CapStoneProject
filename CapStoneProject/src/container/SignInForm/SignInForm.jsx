import React, { useState } from "react";
import './SignInForm.scss'
// import {} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import DefaultButton from "../DefaultButton/DefaultButton";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  AuthsignInWithEmailAndPassword,
} from "../../utils/firebase/firebase";
const fromDetails = {
  email: "",
  password: "",
};
const SingInForm = () => {
  const [formData, setFromData] = useState(fromDetails);

  const { email, password } = formData;

  const resetFormField = () => {
    setFromData(fromDetails);
  };

  const eventHandler = (event) => {
    const { name, value } = event.target;
    setFromData({ ...formData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await AuthsignInWithEmailAndPassword(email, password);
      console.log("REspoonse:", response);

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

 

  const logGoogleUser = async () => {
    let response = await signInWithGooglePopup();
    console.log(response);
    createUserDocumentFromAuth(response);
  };
  return (
    <div className="signUP-container">
      <div>
        <h2> Have a Account </h2>
        <span>Sign In</span>
        <form onSubmit={submitHandler}>
          <FormInput
            type="text"
            onChange={eventHandler}
            value={email}
            name="email"
            label={"Email:"}
          />
          <FormInput
            type="text"
            onChange={eventHandler}
            value={password}
            name="password"
            label={"Password:"}
          />

          <div className="button-container1">
            <DefaultButton buttonType={""} >Sign IN</DefaultButton>
            <DefaultButton
              onClick={logGoogleUser}
              buttonType={"google"}
             type="button"
              
>google sign IN</DefaultButton>            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingInForm;
