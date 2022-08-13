import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const styles = {
    sent:"bg-[#395dff] text-white flex-row-reverse float-right rounded-bl-full text-end ",
    receved:"bg-[#e5e5ea] text-black float-left rounded-br-full"
  }
const Message = ({ message }) => {
  const [user] = useAuthState(auth);
 const messageClass = message.uid=== auth.currentUser.uid ? `${styles.sent}` :`${styles.receved}`
  return (
    <div  className="">
      <div className={`flex items-center m-4 py-2 px-3 shadow-xl rounded-t-full ${messageClass}`}>
        <p className="absolute mt-[-4rem] text-gray-600 text-xs">
          {message.name}
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
