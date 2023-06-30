import React from 'react'
import heatmap from '../../assets/images/heatmap.png'
import "./style.css"

function Heatmap() {
  return (
    <div className='mult-contenttab'>
       <div className="heading-bar-top mt-3"><h2 className="title-main-wgt">Cost & time by Day and month</h2></div>
       <div className='image-chart-date'>
          <div className='card' style={{overflow:'hidden'}}><img src={heatmap} alt=''  /></div>
       </div>
    </div>
  )
}

export default Heatmap