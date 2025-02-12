import React from "react";
import alarm from "./assests/alarm.png";
import setting from "./assests/setting.png";
import man from "./assests/man.png";
import "./TeacheMenu.css";

import { usePage } from "../../../../Components/Header/Header";

const TeacherMenu = () => {
  const { pageTitle } = usePage();
  // console.log(pageTitle+"teacher dekho")

  return (
    <div className="teacher-menu">
      <div className="teacher-logo">
        <h1>{pageTitle}</h1>
      </div>

      <div className="teacher-menu-options">
        <button className="icon-button" aria-label="Notifications">
          <img src={alarm} alt="Notifications" />
        </button>

        <button className="icon-button" aria-label="Settings">
          <img src={setting} alt="Settings" />
        </button>

        <div className="admin-info">
          <h3>Nabile A.</h3>
          <h4>Admin</h4>
        </div>

        <div className="profile-pic">
          <img src={man} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default TeacherMenu;
