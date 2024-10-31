// Defines the `Message` component. It takes in a message and a sender and displays the message in a chat bubble.
const Message = ({
  message,
  sender,
}: {
  message: string;
  sender: "user" | "chatbot";
}) => {
  return (
    <div
      className={
        "flex flex-row " +
        (sender === "chatbot" ? "justify-start" : "justify-end")
      }
    >
      <p
        className={
          "inline-block w-auto p-1.5 px-2 rounded-lg " +
          (sender === "chatbot" ? "bg-slate-300" : "bg-blue-500 text-white")
        }
      >
        {message}
      </p>
    </div>
  );
};

export default Message;
