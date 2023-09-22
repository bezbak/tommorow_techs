import React from 'react'
import scss from './dashboardHeader.module.scss'
import dashSrc from './dashIcon.svg'
import iconSlide from './iconSlide.svg'
import imagesSrc from './images.svg'
import sunSrc from './sun.svg'
import panoramSrc from './panoram.svg'
import webSrc from './web.svg'
import menSrc from './men.svg'
import printSrc from './print.svg'
const DashboardHeader = () => {
  return (
    <div className={scss.dashboardHeader}>
      <div className={scss.dashboardHeader_block}>
        <div className={scss.dashboardHeader_block_item}></div>
        <div className={scss.dashboardHeader_block_item}></div>
        <div className={scss.dashboardHeader_block_item}></div>
      </div>
      <div className={scss.dashboardHeader_block}><img src={dashSrc} alt="" /><img src={iconSlide} alt="" /><img src={iconSlide} alt="" />
        <b>Title</b></div>
      <div className={scss.dashboardHeader_block}>
        <img src={sunSrc} alt="" />
        <div className={scss.dashboard_line}></div>
        <img src={webSrc} alt="" />
        <div className={scss.dashboard_line}></div>
        <img src={panoramSrc} alt="" />
        <div className={scss.dashboard_line}></div>
        <img src={imagesSrc} alt="" />

      </div>
      <div className={scss.dashboardHeader_block}>
        <div className={scss.dashboardHeader_block_item}>
          <img src={printSrc} alt="" /><select name="" id="">
            
          </select></div>
        <div className={scss.dashboardHeader_block_item}>
          <img src={menSrc} alt="" /><select name="" id="">
            
          </select></div>
        <input type="text" placeholder='Search' />
      </div>
    </div>
  )
}

export default DashboardHeader