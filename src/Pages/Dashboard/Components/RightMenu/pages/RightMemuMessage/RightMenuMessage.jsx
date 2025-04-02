// import React from 'react'
import "./RightMenuMessage.css"

const RightMenuMessage = () => {
  return (
    <div className="rightMenuMessage-parent">
      <div className="rightMenuMessage-title">
        <h3>Messages</h3>
      </div>
      <div className="rightMenuMessage-chat">
      <div className="rightMenuMessage-o1">
          <div className="rightMenuMessage-profilePhoto"></div>
          <div className="rightMenuMessage-text">
           <div className="rightMenuMessage-head">
            <b>Samantha William</b>
            <p>12:45</p>
           </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="rightMenuMessage-o1">
          <div className="rightMenuMessage-profilePhoto"></div>
          <div className="rightMenuMessage-text">
           <div className="rightMenuMessage-head">
            <b>Samantha William</b>
            <p>12:45</p>
           </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="rightMenuMessage-o1">
          <div className="rightMenuMessage-profilePhoto"></div>
          <div className="rightMenuMessage-text">
           <div className="rightMenuMessage-head">
            <b>Samantha William</b>
            <p>12:45</p>
            
           </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="rightMenuMessage-o1">
          <div className="rightMenuMessage-profilePhoto">{/* <img src="" alt="stu" /> */}</div>
          <div className="rightMenuMessage-text">
           <div className="rightMenuMessage-head">
            <b>Samantha William</b>
            <p>12:45</p>
           </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <button className="rightMenuMessage-btnViewMore">
        <b>View More</b>
      </button>
    </div>
  );
};

export default RightMenuMessage;
