import { useState } from "react";
import "./ChatSidebar.css";

const ChatSidebar = ({ onSelectChat, selectedChat }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const groups = [
    { id: 1, name: "Class History VII-A", color: "#6A5ACD", messages: 2 },
    { id: 2, name: "Class VII-A", color: "#FF6347", messages: 2 },
    { id: 3, name: "All Student VII", color: "#FFD700", messages: 2 },
  ];

  const chats = [
    { id: 4, name: "Samantha William", color: "#D8BFD8", messages: 2 },
    { id: 5, name: "Tony Soap", color: "#D8BFD8", messages: 2 },
    { id: 6, name: "Karan", color: "#D8BFD8", messages: 0 },
    { id: 7, name: "Sophiya", color: "#D8BFD8", messages: 2 },
    { id: 8, name: "Azahr", color: "#D8BFD8", messages: 2 },
    { id: 9, name: "Jai Telangana", color: "#D8BFD8", messages: 2 },
    { id: 10, name: "Karen Hope", color: "#D8BFD8", messages: 2 },
  ];

  // Filter groups and chats based on search input
  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar">
      <h2>Messages</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h3>Groups</h3>
      <div className="group-list">
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            className={`group-item ${selectedChat?.id === group.id ? "active" : ""}`}
            onClick={() => onSelectChat(group)}
          >
            <div className="group-icon" style={{ backgroundColor: group.color }}></div>
            <div className="group-info">
              <p className="group-name">{group.name}</p>
              <p className="group-message">Lorem ipsum dolor sit amet...</p>
            </div>
            {selectedChat?.id !== group.id && <span className="message-count">{group.messages}</span>}
          </div>
        ))}
      </div>

      <h3>Chats</h3>
      <div className="chat-list">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${selectedChat?.id === chat.id ? "active" : ""}`}
            onClick={() => onSelectChat(chat)}
          >
            <div className="chat-icon" style={{ backgroundColor: chat.color }}></div>
            <div className="chat-info">
              <p className="chat-name">{chat.name}</p>
              <p className="chat-message">Lorem ipsum dolor sit amet...</p>
            </div>
            {selectedChat?.id !== chat.id && <span className="message-count">{chat.messages}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
