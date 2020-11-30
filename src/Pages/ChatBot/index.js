import React from "react";
import Chatbot from "react-chatbot-kit";
//components
import Header from '../../Components/Header/index'
//config chat
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function Chat() {
  return (
    <div className="Chat">
      <Header />
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Chat;