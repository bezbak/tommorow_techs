import React from 'react'
import scss from './Feedback.module.scss'

const Feedback = () => {
  return (
    <div className={scss.Feedback}>
      <div>
        <div>
          <img src="./src/components/ServicesPage/img/avatar.png" alt="" />
          <p>Мухаммад /CEO</p>
        </div>
        <h3>Мы верим в силу инноваций и готовы с вами идти в ногу с быстро меняющимся миром бизнеса. Давайте вместе делать ваш бизнес более успешным и готовым к вызовам будущего.</h3>
      </div>
      <img src="./src/components/ServicesPage/img/itudyr.png" alt="" />
    </div>
  )
}

export default Feedback