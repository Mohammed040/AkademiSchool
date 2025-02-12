// import React from 'react'
import { usePage } from "../../Components/Header/Header"

const Chat = () => {
  const {pageTitle} = usePage()
  // console.log(pageTitle+"Chart dekho")
  return (
    <>
      <h1>Welcome to {pageTitle}</h1>
    </>
  )
}

export default Chat
