import React from 'react'
import scss from './banner.module.scss'
import Header from '../Header/Header'
import Discount from '../Discount/Discount'
import SafariDashborad from '../SafariDashboard/SafariDashboard'
const Banner = ({isLoading}) => {
  return (
    <div className={` ${scss.banner}`}>
      <div className={`${scss.discount_wrap} `}>
        <Discount/>
      </div>
      <Header/>
      <div style={{
        overflow:'hidden',
            perspective:'1100px'
      }
    
      }><SafariDashborad isLoading={isLoading}/></div>
    </div>
  )
}

export default Banner