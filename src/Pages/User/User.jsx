import React from 'react'
import { usePage } from "../../Components/Header/Header"

const User = () => {
  const {pageTitle}= usePage();
  // console.log(pageTitle+"users dekho")
  return (
    <>
      <h1>Welcome to {pageTitle}.</h1>
    </>
  )
}

export default User
