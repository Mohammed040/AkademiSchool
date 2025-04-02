import { useState } from "react";
import { FiSend, FiPaperclip } from "react-icons/fi";
import "./MessageInput.css";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") return;
    console.log("Sent:", message);
    setMessage("");
  };

  return (
    <div className="message-input">
      <FiPaperclip className="icon" />
      <input
        type="text"
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>
        <FiSend className="icon" />
      </button>
    </div>
  );
};

export default MessageInput;
