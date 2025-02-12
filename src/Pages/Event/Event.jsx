// import React from 'react'
import { usePage } from "../../Components/Header/Header"

const Event = () => {
  const {pageTitle}=usePage()
  // console.log(pageTitle+"event dekho")
  return (
    <>
      <h1>Welcome to {pageTitle}</h1>
    </>
  )
}

export default Event
