// import React from 'react'
import "./Dashboard.css";
import Content from "./Components/Content/Content";
import RightMenu from "./Components/RightMenu/RightMenu";

const Dashboard = () => {
 
  return (
     <div className="dashboard-container">
      <div className="dashboard-main-content">
      <Content/>
      </div>
      
      <div className="dashboard-side-content">
        <RightMenu/>
      </div>
    </div>
  );
};

export default Dashboard;
