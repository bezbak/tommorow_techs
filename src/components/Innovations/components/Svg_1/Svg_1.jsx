import React, { useState } from 'react'
import c from '../../innovations.module.scss'
import link_img from '../../image/link_img'
const Svg_1 = ({lol_X,lol_Y}) => {
  // document.querySelector('.Svg_1_border').addEventListener('mousemove', e=>{
  //   console.log(lol);
    
  // })

  return (
    // <div className={`Svg_1_border Svg_1`}>
    //   <div className="border" style={{
    //     left:`${(lol_X * 1.6) - 3500}px`,
    //     top:`${(lol_Y * 1.6)}px`
    //   }}></div>
      <div className={`${c.Svg_1} ${c.block} Svg_1`}>
        {/* <div className="border"> */}
          <span>Устройства</span>
          <p>Активная поддержка во всех устройствах</p>
          <div>
            <img src={link_img.phone} alt="" />
            <img src={link_img.computer} alt="" />
            <img src={link_img.laptop} alt="" />
            <img src={link_img.tablet} alt="" />
            <span >All devices ready</span>
          </div>
        {/* </div> */}
      </div>
    // </div>
  )
}

export default Svg_1