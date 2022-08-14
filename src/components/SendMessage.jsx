import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

const SendMessage = ({ scroll, slideDown }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") return;
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    slideDown();
    // scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form
      action=""
      onSubmit={sendMessage}
      className="flex w-full h-14 text-xl absolute bottom-0 max-w-[728px]"
    >
      <input
        value={input}
        className="w-full bg-gray-900 p-3 text-xl text-white outline-none border-none"
        type="text"
        placeholder="Message"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className=" w-[20%] bg-green-500 text-white">Send</button>
    </form>
  );
};

export default SendMessage;
