import  { useState } from "react";
import "./Schedule.css"; // Import CSS for styling
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // Icons for date and time

const Schedule = () => {
  // Dummy schedule data
  const initialSchedules = [
    {
      id: 1,
      title: "Basic Algorithm",
      subject: "Algorithm",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      color: "#5A4AE3", // Left border color
    },
    {
      id: 2,
      title: "Basic Art",
      subject: "Art",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      color: "#E86A33",
    },
    {
      id: 3,
      title: "HTML & CSS Class",
      subject: "Programming",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      color: "#F2B807",
    },
    {
      id: 4,
      title: "Simple Past Tense",
      subject: "English",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      color: "#464589",
    },
    
  ];

  // State to manage visible schedules
  const [schedules, setSchedules] = useState(initialSchedules);
  const [showAll, setShowAll] = useState(false);

  // Function to toggle "View More"
  const handleViewMore = () => {
    if (showAll) {
      setSchedules(initialSchedules.slice(0, 4)); // Show only first 4
    } else {
      setSchedules([...initialSchedules]); // Show all schedules
    }
    setShowAll(!showAll);
  };

  return (
    <div className="schedule-container">
      {/* Header Section */}
      <div className="schedule-header">
        <h2>Schedule Details</h2>
        <p>Thursday, 10th April, 2021</p>
      </div>

      {/* Schedule List */}
      <div className="schedule-list">
        {schedules.map((item) => (
          <div key={item.id} className="schedule-card">
            <div className="left-border" style={{ backgroundColor: item.color }}></div>
            <div className="schedule-content">
              <h3>{item.title}</h3>
              <p className="subject">{item.subject}</p>
              <div className="schedule-meta">
                <span>
                  <FaCalendarAlt className="icon" /> {item.date}
                </span>
                <span>
                  <FaClock className="icon" /> {item.time}
                </span>
              </div>
            </div>
            <div className="circle"></div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="view-more-btn" onClick={handleViewMore}>
        {showAll ? "View Less" : "View More"}
      </button>
    </div>
  );
};

export default Schedule;
