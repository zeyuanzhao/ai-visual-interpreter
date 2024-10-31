"use client";

import { Button, Input } from "@nextui-org/react";
import fileToBase64 from "@/lib/base64";

// This defines a type called `MessageType` that has two properties: `message` and `sender`.
interface MessageType {
  message: string;
  sender: "user" | "chatbot";
}

// Defines the `Chatbot` component. Make sure that the component takes an image as a prop.
const Chatbot = () => {
  // Set up states for messages, message input, and chat initialization

  // Write a function to send a prompt to the chatbot

  // Write a function that handles the chat submission

  // Write a function that runs when the image is loaded and sends the image to the Gemini API

  return (
    <div className="flex-1 w-full flex flex-col overflow-hidden">
      <div className="flex-auto pt-12 pb-4 px-2 space-y-4 overflow-auto">
        {/* Insert messages here */}
      </div>
      <div className="p-2 pb-4">
        {/* Call a handler once message is submitted */}
        <form className="flex flex-row justify-between space-x-2">
          {/* Keep track of input */}
          <Input />
          <Button type="submit" color="primary">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
