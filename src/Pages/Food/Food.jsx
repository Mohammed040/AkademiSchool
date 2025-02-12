// import React from 'react'
import { usePage } from "../../Components/Header/Header"

const Food = () => {
  const {pageTitle}=usePage();
  // console.log(pageTitle+"food dekho")
  return (
    <>
      <h1>Welcome to {pageTitle}.</h1>
    </>
  )
}

export default Food
