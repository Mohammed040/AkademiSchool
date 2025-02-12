import { NavLink } from "react-router-dom";
import logo from "./assetss/logo.png";
import dashboardIcon from "./assetss/Home.png";
import studentIcon from "./assetss/Student.png";
import teacherIcon from "./assetss/Teacher.png";
import eventIcon from "./assetss/Calendar.png";
import financeIcon from "./assetss/Finance.png";
import foodIcon from "./assetss/food.png";
import chatIcon from "./assetss/Chat.png";
import userIcon from "./assetss/User.png";
import activityIcon from "./assetss/Activity.png";
import { usePage } from "../Header/Header";
import "./Sidebar.css"

const Sidebar = () => {
  const { setPageTitle } = usePage();
  // console.log(usePage())

  const handleNavClick = (title) => {
    console.log(title)
    setPageTitle(title);
  };
 
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <h1>Akademi</h1>
      </div>
      <div className="sidebar-links">
        <NavLink to="/dashboard" className="sidebar-link" onClick={() => handleNavClick("Dashboard")}>
          <img src={dashboardIcon} alt="Dashboard" className="icon" /> Dashboard
        </NavLink>

        <NavLink to="/student" className="sidebar-link" onClick={() => handleNavClick("Student")}>
          <img src={studentIcon} alt="Student" className="icon" /> Student
        </NavLink>

        <NavLink to="/teacher" className="sidebar-link" onClick={() => handleNavClick("Teacher")}>
          <img src={teacherIcon} alt="Teacher" className="icon" /> Teacher
        </NavLink>
        <NavLink to="/event" className="sidebar-link" onClick={() => handleNavClick("Event")}>
          <img src={eventIcon} alt="Event" className="icon" /> Event
        </NavLink>
        <NavLink to="/finance" className="sidebar-link" onClick={() => handleNavClick("Finance")}>
          <img src={financeIcon} alt="Finance" className="icon" /> Finance
        </NavLink>
        <NavLink to="/food" className="sidebar-link" onClick={() => handleNavClick("Food")}>
          <img src={foodIcon} alt="Food" className="icon" /> Food
        </NavLink>
        <NavLink to="/chat" className="sidebar-link" onClick={() => handleNavClick("Chat")}>
          <img src={chatIcon} alt="Chat" className="icon" /> Chat
        </NavLink>
        <NavLink to="/user" className="sidebar-link" onClick={() => handleNavClick("User")}>
          <img src={userIcon} alt="User" className="icon" /> User
        </NavLink>
        <NavLink to="/latestActivity" className="sidebar-link" onClick={() => handleNavClick("Latest Activity")}>
          <img src={activityIcon} alt="Activity" className="icon" /> Latest Activity
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
