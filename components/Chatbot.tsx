import { useState } from "react";
import Message from "./Message";
import { Button, Input } from "@nextui-org/react";

interface MessageType {
  message: string;
  sender: "user" | "chatbot";
}

const Chatbot = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    { message: "Hello! How can I help you?", sender: "chatbot" },
    { message: "Hello! How can I help you?", sender: "user" },
    { message: "Hello! How can I help you?", sender: "chatbot" },
    { message: "Hello! How can I help you?", sender: "user" },
    { message: "Hello! How can I help you?", sender: "chatbot" },
    { message: "Hello! How can I help you?", sender: "user" },
    { message: "Hello! How can I help you?", sender: "chatbot" },
    { message: "Hello! How can I help you?", sender: "user" },
    { message: "Hello! How can I help you?", sender: "chatbot" },
    { message: "Hello! How can I help you?", sender: "chatbot" },
    { message: "Hello! How can I help you?", sender: "chatbot" },
  ]);
  const [messageInput, setMessageInput] = useState<string>("");
  return (
    <div className="flex-1 w-full border border-black flex flex-col overflow-hidden">
      <div className="flex-auto border pt-12 pb-4 px-2 space-y-4 overflow-auto">
        {messages.map((message, index) => (
          <Message
            message={message.message}
            sender={message.sender}
            key={index}
          />
        ))}
      </div>
      <div className="p-2 pb-4 border">
        <form className="flex flex-row justify-between space-x-2">
          <Input value={messageInput} onValueChange={setMessageInput} />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
