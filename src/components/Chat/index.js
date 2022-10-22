import React, { useState, useEffect } from "react";
import "./style.css";
import Signout from "../Signout";
import { auth, db } from "../Firebase/config";
import Message from "../Message";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <Signout />
      <div className="msgs">
      {messages.map(({ id, text, photoURL, uid }) => (
        <div>
          <div
            key={id}
            className={`msg ${uid === auth.currentUser ? "sent" : "recieved"}`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        </div>
      ))}
      </div>
      <Message />
    </div>
  );
}

export default Chat;
