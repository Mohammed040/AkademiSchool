// import React from 'react'
import { usePage } from "../../Components/Header/Header"

const Finance = () => {
  const {pageTitle}=usePage();
  // console.log(pageTitle+"finance dekho")
  return (
    <>
      <h1>Welcome to {pageTitle}.</h1>
    </>
  )
}

export default Finance
