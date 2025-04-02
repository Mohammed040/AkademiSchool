// import React from 'react'
import RightMenuMessage from "./pages/RightMemuMessage/RightMenuMessage"
import RightMenuContact from "./pages/RightMenuContact/RightMenuContact"
import RightMenuFoodMenu from "./pages/RightMenuFoodMenu/RightMenuFoodMenu"
import RightMenuMenu from "./pages/RightMenuMenu/RightMenuMenu"
import "./RightMenu.css"

const RightMenu = () => {
  return (
    <>
      <RightMenuMenu/>
      <RightMenuContact/>
      <RightMenuMessage/>
      <RightMenuFoodMenu/>
    </>
  )
}

export default RightMenu
  