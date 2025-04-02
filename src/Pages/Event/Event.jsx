// import React from 'react'
import { usePage } from "../../Components/Header/Header";
import SearchComponent from "../Dashboard/Components/Content/SearchComponent";
import RightMenuMenu from "../Dashboard/Components/RightMenu/pages/RightMenuMenu/RightMenuMenu";
import Calendar from "./Components/Calendar";
import Schedule from "./Components/Schedule";
import "./Event.css";

const Event = () => {
  const { pageTitle } = usePage();
  // console.log(pageTitle+"event dekho")
  return (
    <div className="eventContainer">
      <div className="eventNavbar">
        <h1>{pageTitle}</h1>
        <div className="eventSearchMenu">
          <SearchComponent />
          <RightMenuMenu />
        </div>
      </div>

      <div className="calenderSchedule">
        <Calendar />
        <Schedule/>
      </div>
    </div>
  );
};

export default Event;
