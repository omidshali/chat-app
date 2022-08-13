import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const googleSinIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div>
      <GoogleButton onClick={googleSinIn}/>
    </div>
  );
};

export default SignIn;
