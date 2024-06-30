import React from 'react'
import scss from './Feedback.module.scss'

const Feedback = () => {
  return (
    <>
    <div className={scss.Feedback}>
      <div>
        <div>
          <img src="./src/components/ServicesPage/img/avatarik.jpeg" alt="avatar" />
          <p>Мухаммад /CEO</p>
        </div>
        <h3>Мы верим в силу инноваций и готовы с вами идти в ногу с быстро меняющимся миром бизнеса. Давайте вместе делать ваш бизнес более успешным и готовым к вызовам будущего.</h3>
      </div>
      <img src="./src/components/ServicesPage/img/itudyr.png" alt="itudyr" />
    </div>
    <div className={scss.line}></div>
    </>
  )
}

export default Feedback