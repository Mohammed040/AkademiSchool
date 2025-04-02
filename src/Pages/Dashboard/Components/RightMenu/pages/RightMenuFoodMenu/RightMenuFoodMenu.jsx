// import React from 'react'
import "./RightMenuFoodMenu.css"

const RightMenuFoodMenu = () => {
  return (
    <div className='rightMenuFoodMenu-parent'>
      <h3>Current Food Menu</h3>
      <div className="rightMenuFoodMenu-footItem">
        <div className="image">
            <img src="" alt="" />
        </div>
        <div className="text">
            <b>Beef Steak with Fried Potato</b>
            <p>Lorem, ipsum.</p>
        </div>
      </div>
      <div className="rightMenuFoodMenu-footItem">
        <div className="image">
            <img src="" alt="" />
        </div>
        <div className="text">
            <b>Pancake with Honey</b>
            <p>Lorem, ipsum.</p>
        </div>
      </div>
      <div className="rightMenuFoodMenu-footItem">
        <div className="image">
            <img src="" alt="" />
        </div>
        <div className="text">
            <b>Japanese Beef Ramen</b>
            <p>Lorem, ipsum.</p>
        </div>
      </div>
      <button className="rightMenuFoodMenu-btnViewMore">
        <b>View More</b>
      </button>
    </div>
  )
}

export default RightMenuFoodMenu
