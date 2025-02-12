// import React from 'react'
import "./Content.css";
import Overview from "./Pages/Overview/Overview";
import SchoolPerformance from "./Pages/SchoolPerformance/SchoolPerformance";
import searchBar from "./assetss/Search.png";
import { usePage } from "../../../../Components/Header/Header";

const Content = () => {
  const { pageTitle } = usePage();
  return (
    <div className="dashboard-content">
      <div className="content-navbar">
        <h1 className="content-logo">{pageTitle}</h1>
        <div className="search-bar">
          <img src={searchBar} alt="ja slkdfl" />
          <input type="text" placeholder="Search here..." name="" id="" />
        </div>
      </div>
      <div>
        <Overview />
        <SchoolPerformance />
      </div>
    </div>
  );
};

export default Content;
