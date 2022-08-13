import React from "react";
import { auth } from "../firebase";

const LogOut = () => {
  return (
    <button
      onClick={() => auth.signOut()}
      className="bg-gray-200 py-3 px-4 hover:bg-gray-100 font-bold"
    >
      LogOut
    </button>
  );
};

export default LogOut;
