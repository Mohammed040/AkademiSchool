// import React from 'react'
import "./RightMenuContact.css";
import email from "./assetss/Email.png";

const RightMenuContact = () => {
  return (
    <div className="RightMenuContact-parent">
      <div className="title-btn">
        <div className="title">
          <h3>Recent Students</h3>
          <p>
            You have <b>456</b> students
          </p>
        </div>
        <div className="btn">
          <p>+</p>{" "}
        </div>
      </div>
      <div className="RightMenuContact-chat">
        <div className="o1">
          <div className="profilePhoto"></div>
          <div className="text">
            <b>Samantha William</b>
            <p>Class VII A</p>
          </div>
          <div className="mail">
            <img src={email} alt="" />
          </div>
        </div>
        <div className="o1">
          <div className="profilePhoto"></div>
          <div className="text">
            <b>Samantha William</b>
            <p>Class VII A</p>
          </div>
          <div className="mail">
            <img src={email} alt="" />
          </div>
        </div>
        <div className="o1">
          <div className="profilePhoto"></div>
          <div className="text">
            <b>Samantha William</b>
            <p>Class VII A</p>
          </div>
          <div className="mail">
            <img src={email} alt="" />
          </div>
        </div>
        <div className="o1">
          <div className="profilePhoto"></div>
          <div className="text">
            <b>Samantha William</b>
            <p>Class VII A</p>
          </div>
          <div className="mail">
            <img src={email} alt="" />
          </div>
        </div>
        <div className="o1">
          <div className="profilePhoto"></div>
          <div className="text">
            <b>Samantha William</b>
            <p>Class VII A</p>
          </div>
          <div className="mail">
            <img src={email} alt="" />
          </div>
        </div>
      </div>
      <button className="RightMenuContent-btnViewMore">
        <b>View More</b>
      </button>
    </div>
  );
};

export default RightMenuContact;
