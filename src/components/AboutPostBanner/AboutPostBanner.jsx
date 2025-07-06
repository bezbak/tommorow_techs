import React from 'react'
import lol from './AboutPostBanner.module.scss'
import AnimatedLine from '../AnimatedLine/AnimatedLine'
export default function AboutPostBanner() {
  return (
    <div className={lol.AboutPostBanner}>
      <h3 className={lol.h3_1}>
        <span className={lol.color}>О нас: </span>компания, <br className={lol.break} />которая создает будущее сегодня
      </h3>
      <AnimatedLine />
      <h3 className={lol.h3_2}>Все началось с идеи и малых инструментов. Сейчас мы команда с лучшими специалистами</h3>
      <AnimatedLine />
    </div>
  )
}
