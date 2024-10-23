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
          "inline-block w-auto p-2 rounded-lg " +
          (sender === "chatbot" ? "bg-slate-300" : "bg-blue-500 text-white")
        }
      >
        {message}
      </p>
    </div>
  );
};

export default Message;
