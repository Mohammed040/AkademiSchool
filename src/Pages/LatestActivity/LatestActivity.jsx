// import React from 'react'
import { usePage } from "../../Components/Header/Header"

const LatestActivity = () => {
  const {pageTitle} = usePage();
  // console.log(pageTitle+"activity dekho")
  return (
    <>
      <h1>Welcome to {pageTitle}</h1>
    </>
  )
}

export default LatestActivity
