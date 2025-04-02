// import React from 'react'
import bell from "./assetss/bell.png"
import gear from "./assetss/gear.png"
import "./RightMenuMenu.css"


const RightMenuMenu = () => {
  return (
    <div className="rightmenumenu-parent">
      
      <div className="rightmenumenu-notification">
        <img src={bell} alt="" />
      </div>
      <div className="rightmenumenu-setting">
        <img src={gear} alt="" />
      </div>
      <div className="rightmenumenu-text">
        <b>Nabila A.</b>
        <p>Admin</p>
        </div>
      <div className="rightmenumenu-placeholder"></div>
    </div>
   
  )
}

export default RightMenuMenu
