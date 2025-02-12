import React, { useEffect, useState } from "react";
import './Teacherlist.css'
import techersData from './teachers.json'


const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  console.log(teachers.firstname)
  console.log(teachers.photo)
  
  
  
  useEffect(() => {
    setTeachers(techersData.teachers)
  }, []);

  return (

    <div className="teacher-list">

        
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">

              <p>.....</p>

              <img src={teacher.photo} alt={`${teacher.firstname}`} className="teacher-photo" />
              <h3>{teacher.firstname} {teacher.lastname}</h3>
              <h4>{teacher.subject}</h4>
              <div className="teacher-icons">
                <img src={teacher.phone} alt="Phone" className="icon" />
                <img src={teacher.message} alt="Message" className="icon" />
              </div>
            </div>
        ))}
      </div>
  );
};

export default TeacherList;
