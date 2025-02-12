import React from 'react'
import './Teacherpages.css'
import rightarrow from './assets/arrow.png'
import leftarrow from './assets/left-arrow.png'

const Teacherpages = () => {
  return (
    <>
    <div className="teacherpagination">
      <h3>Showing 1-5 from 100 data</h3>

      <div className="teacherpages">

        <div className="leftarrow">
          <img src={leftarrow} alt="left-arrow" />
        </div>

        <div className="pageone">
          <h4>1</h4>
        </div>

        <div className="pagetwo">
          <h4>2</h4>
        </div>

        <div className="pagethree">
          <h4>3</h4>
        </div>

        <div className="rightarrow">
          <img src={rightarrow} alt="right-arrow" />
        </div>

      </div>
    </div>
    </>
  )
}

export default Teacherpages
