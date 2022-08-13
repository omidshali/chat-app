import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const Navbar = () => {
  const [user] = useAuthState(auth);

  // console.log(user);
  return (
    <div className="bg-gray-800 h-20 flex items-center p-4 justify-between  ">
      <h1 className="text-white  text-2xl ">Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
