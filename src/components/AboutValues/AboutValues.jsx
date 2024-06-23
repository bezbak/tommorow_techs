import React from 'react'
import lol from './AboutValues.module.scss'
import Quality from './icons/Quality'
import Confidence from './icons/Confidence'
import Sustainability from "./icons/Sustainability"
import Value from "./icons/Value"

const AboutValues = () => {
  return (
    <div className={lol.AboutValues}>
      <div className={lol.container}>
        <h2>Наши ценности</h2>
        <h2 className={lol.description}>
          Наши ценности играют ключевую роль в том, как мы работаем и как взаимодействуем с нашими клиентами и
          партнерами.
        </h2>
      </div>
      <div className={lol.frams}>
        <div className={lol.block}>
          <Quality />
          <h3>Качество</h3>
        </div>
        <div className={lol.block}>
          <Confidence />
          <h3>Доверие</h3>
        </div>
        <div className={lol.block}>
         <Sustainability />
          <h3>Устойчивость</h3>
        </div>
        <div className={lol.block}>
          <Value />
          <h3>Ценность</h3>
        </div>
      </div>
      <div className={lol.line}></div>
    </div>
  )
}

export default AboutValues
