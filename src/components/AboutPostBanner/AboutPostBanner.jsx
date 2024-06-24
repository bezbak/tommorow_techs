import React from 'react'
import lol from './AboutPostBanner.module.scss'
export default function AboutPostBanner() {
  return (
    <div className={lol.AboutPostBanner}>
      <h3 className={lol.h3_1}>
        <span className={lol.color}>О нас: </span>компания, которая создает будущее сегодня
      </h3>
      <div className={lol.line + ' ' + lol.first}></div>
      <h3 className={lol.h3_2}>Все началось с идеи и малых инструментов. Сейчас мы команда с лучшими специалистами</h3>
      <div className={lol.line}></div>
    </div>
  )
}
