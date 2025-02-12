// import React from 'react'
import { usePage } from "../../Components/Header/Header"

const Student = () => {
  const {pageTitle} = usePage();
  // console.log(pageTitle+"student dekho")
  // alert(pageTitle)
  // console.log(pageTitle)
  return (
    <>
      <h1>Welcome to {pageTitle}</h1>
    </>
  )
}

export default Student
