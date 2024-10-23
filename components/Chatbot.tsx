import { useEffect, useState } from "react";
import Message from "./Message";
import { Button, Input } from "@nextui-org/react";
import {
  ChatSession,
  GenerateContentRequest,
  GenerateContentResult,
  Part,
} from "@google/generative-ai";
import { model } from "@/lib/gemini";

interface MessageType {
  message: string;
  sender: "user" | "chatbot";
}

const Chatbot = ({ image }: { image: File }) => {
  const [messages, setMessages] = useState<MessageType[]>([
    { message: "Hello! How can I help you?", sender: "chatbot" },
  ]);
  const [messageInput, setMessageInput] = useState<string>("");
  const [chat, setChat] = useState<ChatSession>(model.startChat());

  const sendPrompt = async (prompt: string | Array<string | Part>) => {
    const res = await chat.sendMessage(prompt);
    setMessages([
      ...messages,
      { message: res.response.text(), sender: "chatbot" },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([...messages, { message: messageInput, sender: "user" }]);
    setMessageInput("");

    const res = await chat.sendMessage(messageInput);
    setMessages([
      ...messages,
      { message: res.response.text(), sender: "chatbot" },
    ]);
  };

  useEffect(() => {
    const initialize = async () => {
      sendPrompt([
        {
          inlineData: {
            data: Buffer.from(await image.arrayBuffer()).toString("base64"),
            mimeType: image.type,
          },
        },
      ]);
      initialize();
    };
  }, []);

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
        <form
          className="flex flex-row justify-between space-x-2"
          onSubmit={handleSubmit}
        >
          <Input value={messageInput} onValueChange={setMessageInput} />
          <Button type="submit" color="primary">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
