import React from 'react'
import c from '../../innovations.module.scss'
import link_img from '../../image/link_img'

const Svg_2 = () => {
  return (
    <div className={`${c.Svg_2} ${c.block} Svg_2`}>
      <span>Устройства</span>
      <h2>Продукт для какого устройства</h2>
      <div className={c.Svg_2_main}>
        <div>
          <img src={link_img.phone} alt="" />
          <p>Мобильные приложения</p>
        </div>
        <div>
          <img src={link_img.computer} alt="" />
          <p>Системы управления</p>
        </div>
        <div>
          <img src={link_img.laptop} alt="" />
          <p>Десктопные приложения</p>
        </div>
        <div>
          <img src={link_img.monitor} alt="" />
          <p>Широкоформатные устройства</p>
        </div>
      </div>
    </div>
  )
}

export default Svg_2