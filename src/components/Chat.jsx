import React, { useState, useEffect } from "react";
import Message from "./Message";
import { db } from "../firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import SendMessage from "./SendMessage";

const Chat = () => {
  // const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const slideDown = () => {
    var slider = document.getElementById("slider");
    slider.scrollTop = slider.scrollTop + 1000;
  };
  return (
    <>
      <main
        id="slider"
        className="flex flex-col p-[10px] relative overflow-y-scroll overscroll-auto scrollbar-hide scroll-smooth "
      >
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessage  slideDown={slideDown} />
      {/* <span ref={scroll}></span> */}
    </>
  );
};

export default Chat;
