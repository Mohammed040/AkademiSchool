// import React from 'react'
import "./SchoolFinance.css";
import ellipse1 from "./assetss/Ellipse1.png";
import ellipse2 from "./assetss/Ellipse2.png";
import chart from "./assetss/chart(1).png"

const SchoolFinance = () => {
  return (
    <div className="dashboard-school-finance">
      <div className="dashboard-school-finance-par">
        <h2>School Finance</h2>
        <div className="dashboard-school-finance-hint">
          <div className="dashboard-school-finance-legend">
            <div className="dashboard-school-finance-legend-img">
              <img src={ellipse1} alt="" />
            </div>
            <div className="dashboard-school-finance-text">
              <p>This Weak</p>
              <p>
                <b>1.245</b>
              </p>
            </div>
          </div>
          <div className="dashboard-school-finance-legend">
            <div className="dashboard-school-finance-legend-img">
              <img src={ellipse2} alt="" />
            </div>
            <div className="dashboard-school-finance-text">
              <p>This Weak</p>
              <p>
                <b>1.245</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-school-finance-charts">
       
            <img src={chart} alt="" />
        
      </div>
    </div>
  );
};

export default SchoolFinance;
