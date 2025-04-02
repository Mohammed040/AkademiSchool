// import React from 'react'
import "./Content.css";
import Overview from "./Pages/Overview/Overview";
import SchoolPerformance from "./Pages/SchoolPerformance/SchoolPerformance";

import { usePage } from "../../../../Components/Header/Header";
import SchoolCalender from "./Pages/SchoolCalender/SchoolCalender";
import SchoolFinance from "./Pages/SchoolFinance/SchoolFinance";
import SearchComponent from "./SearchComponent";
import UnpaidStudent from "./Pages/UnpaidStudent/UnpaidStudent";

const Content = () => {
  const { pageTitle } = usePage();
  return (
    <div className="dashboard-content">
      <div className="content-navbar">
        <h1 className="content-logo">{pageTitle}</h1>
        <SearchComponent/>
      </div>
      <div>
        <Overview />
        <SchoolPerformance />
        <div className="school-calender-finance">
        <SchoolCalender/>
        <SchoolFinance/>
        
        </div>
        <UnpaidStudent/>
      </div>
    </div>
  );
};

export default Content;
