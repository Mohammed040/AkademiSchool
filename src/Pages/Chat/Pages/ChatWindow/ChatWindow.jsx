import { useState } from "react";
import "./ChatWindow.css";

const ChatWindow = ({ selectedChat }) => {
  const [messages, setMessages] = useState([
    { text: "Hello Nabila!", sender: "received", time: "12:45 PM" },
    { text: "Can I see your history lesson homework?", sender: "received", time: "12:45 PM" },
    { text: "Hello Samantha!", sender: "sent", time: "12:45 PM" },
    { text: "I'm not finished yet, why don’t we work together to finish homework?", sender: "sent", time: "12:45 PM" }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    const updatedMessages = [
      ...messages,
      { text: newMessage, sender: "sent", time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
    ];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  return (
    <div className="chat-box">
      {selectedChat ? (
        <>
          {/* 🔹 Chat Header */}
          <div className="chat-header">
            <div className="profile">
              <img src="https://via.placeholder.com/40" alt="profile" />
              <div className="user-info">
                <h2>{selectedChat.name}</h2>
                <p>Online</p>
              </div>
            </div>
            <span>📹 ...</span>
          </div>

          {/* 🔹 Messages */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
                <span className="time">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* 🔹 Input Field */}
          <div className="chat-aainput">
            <input
              type="text"
              placeholder="Write your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send 🚀</button>
          </div>
        </>
      ) : (
        <p>Select a chat to start messaging</p>
      )}
    </div>
  );
};

export default ChatWindow;
