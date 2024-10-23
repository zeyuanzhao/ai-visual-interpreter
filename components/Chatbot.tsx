import { useState } from "react";
import Message from "./Message";

interface MessageType {
  message: string;
  sender: "user" | "chatbot";
}

const Chatbot = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    { message: "Hello! How can I help you?", sender: "chatbot" },
  ]);
  return (
    <div className="flex-auto w-full border border-black flex flex-col">
      <div className="flex-auto border pt-12">
        {messages.map((message, index) => (
          <Message
            message={message.message}
            sender={message.sender}
            key={index}
          />
        ))}
      </div>
      <div className="h-16 border"></div>
    </div>
  );
};

export default Chatbot;
