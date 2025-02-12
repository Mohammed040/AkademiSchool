// import React from 'react'
import "./Overview.css";
import student from "./assetss/Student-1.png";
import food from "./assetss/food-1.png";
import teacher from "./assetss/Teacher-1.png";
import calendar from "./assetss/Calendar-1.png";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-content">
        <div className="box" >
          <div className="img-div" id="box-1">
          <img src={student} alt="" />
          </div>
          <div>
            <p>Student</p>
            <h1>935</h1>
          </div>
        </div>
        <div className="box" >
        <div className="img-div" id="box-2">
          <img src={teacher} alt="" />
          </div>
          <div>
            <p>Teacher</p>
            <h1>56</h1>
          </div>
        </div>
        <div className="box" >
        <div className="img-div" id="box-3">
          <img src={calendar} alt="" />
          </div>
          <div>
            <p>Event</p>
            <h1>40</h1>
          </div>
        </div>
        <div className="box" >
        <div className="img-div" id="box-4">
          <img src={food} alt="" />
          </div>
          <div>
            <p>Food</p>
            <h1>32k</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
