import React from 'react'
import TeacherMenu from "./Components/TeacherMenu/TeacherMenu"
import TeacherNav from './Components/TeacherNav/TeacherNav'
import TeacherList from "./Components/TeacherList/TeacherList";
import Teacherpages from "./Components/TeacherPages/Teacherpages";

const Teacher = () => {
  return (
    <>
      <TeacherMenu/>
      <TeacherNav/>
      <TeacherList/>
      <Teacherpages/>
    </>
  )
}

export default Teacher;