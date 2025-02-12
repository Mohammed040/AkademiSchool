import React from 'react'
import './TeacherNav.css'
import plus from './assets/plus.png'
import arrow from './assets/down-arrow.png'
import search from './assets/search.png'

const TeacherNav = () => {
  return (
    <>
    
    <div className="teachernav">

      <div className="search">
        <div className="input-container">
          <img src={search} alt="search icon" className="search-icon" />
          <input type="text" placeholder="Search here" />
        </div>
      </div>


      <div className="nav-button">
        <button className="newest">Newest <img src={arrow} alt="sort" /></button>
        <button className="add-student"><img src={plus} alt="add" /> New Teacher</button>
      </div>

    </div>
    </>
  )
}

export default TeacherNav
