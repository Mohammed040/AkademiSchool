// import React from 'react'
import "./SchoolPerformance.css";
import ellipse1 from "./assetss/Ellipse1.png";
import ellipse2 from "./assetss/Ellipse2.png";
import chart from "./assetss/chart.png"

const SchoolPerformance = () => {
  return (
    <div className="school-performance">
      <div className="school-performance-heading">
      <h2>School Performance</h2>
      <div className="hint">
        <div className="legend">
          <div className="legend-img">
            <img src={ellipse1} alt="" />
          </div>
          <div className="text">
            <p>This Weak</p>
            <p>
              <b>1.245</b>
            </p>
          </div>
        </div>
        <div className="legend">
        <div className="legend-img">
            <img src={ellipse2} alt="" />
            </div>
          <div className="text">
            <p>This Weak</p>
            <p>
              <b>1.245</b>
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="chart">
        <img src={chart} alt="" />
      </div>
    </div>
  );
};

export default SchoolPerformance;
