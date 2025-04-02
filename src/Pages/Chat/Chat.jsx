// import React from 'react'
import { useState } from "react";
import { usePage } from "../../Components/Header/Header";
import SearchComponent from "../Dashboard/Components/Content/SearchComponent";
import RightMenuMenu from "../Dashboard/Components/RightMenu/pages/RightMenuMenu/RightMenuMenu";
import "./Chat.css";
import ChatSidebar from "./Pages/CharSidebar/ChatSidebar";
import ChatWindow from "./Pages/ChatWindow/ChatWindow";

const Chat = () => {
  const { pageTitle } = usePage();
  const [selectedChat, setSelectedChat] = useState(null);
  // console.log(pageTitle+"Chart dekho")
  return (
    <>
      <div className="chatNav">
        <h1>{pageTitle}</h1>
        <div className="chatNavRight">
          <SearchComponent />
          <RightMenuMenu />
        </div>
      </div>
      <div className="chat-container">
        {/* Sidebar for chat contacts */}

        <ChatSidebar onSelectChat={setSelectedChat} selectedChat={selectedChat} />
        <ChatWindow selectedChat={selectedChat} />
      </div>
    </>
  );
};

export default Chat;
