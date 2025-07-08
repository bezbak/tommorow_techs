import React from 'react'
import scss from './Feedback.module.scss'
import img from '/src/components/ServicesPage/img/avatarik.jpeg'
import img2 from '/src/components/ServicesPage/img/itudyr.png'
const Feedback = () => {
  return (
    <>
    <div className={scss.Feedback}>
      <div>
        <div>
          <img src={img} alt="avatar" />
          <p>Мухаммад /CEO</p>
        </div>
        <h3>Мы верим в силу инноваций и готовы с вами идти в ногу с быстро меняющимся миром бизнеса. Давайте вместе делать ваш бизнес более успешным и готовым к вызовам будущего.</h3>
      </div>
      <img src={img2} alt="itudyr" />
    </div>
    <div className={scss.line}></div>
    </>
  )
}

export default Feedback