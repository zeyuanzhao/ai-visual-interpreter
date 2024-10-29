"use client";

import { model } from "@/lib/gemini";
import { Part } from "@google/generative-ai";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";

interface MessageType {
  message: string;
  sender: "user" | "chatbot";
}

const Chatbot = ({ image }: { image: File }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");
  const isInitialized = useRef(false);
  const [chat] = useState(model.startChat());

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  const sendPrompt = async (prompt: string | Array<string | Part>) => {
    console.log("PROMPT: " + JSON.stringify(prompt[0]));
    return await chat.sendMessage(prompt);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: messageInput, sender: "user" },
    ]);
    setMessageInput("");

    const res = await sendPrompt(messageInput);
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: res.response.text(), sender: "chatbot" },
    ]);
  };

  useEffect(() => {
    const initializeChat = async () => {
      if (!image || isInitialized.current) return;
      isInitialized.current = true;

      const base64Image = await fileToBase64(image);
      const res = await sendPrompt([
        {
          inlineData: {
            data: base64Image,
            mimeType: image.type,
          },
        },
      ]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: res.response.text(), sender: "chatbot" },
      ]);
    };

    initializeChat();
  }, [image]);

  return (
    <div className="flex-1 w-full flex flex-col overflow-hidden">
      <div className="flex-auto pt-12 pb-4 px-2 space-y-4 overflow-auto">
        {messages.map((message, index) => (
          <Message
            message={message.message}
            sender={message.sender}
            key={index}
          />
        ))}
      </div>
      <div className="p-2 pb-4">
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
