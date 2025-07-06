import React, { useState } from 'react'
import lol from './AboutThisUs.module.scss'
import AnimatedLine from '../AnimatedLine/AnimatedLine'
export default function AboutThisUs() {
  const [HeightStyle, setHeightStyle] = useState({})
  setTimeout(() => {
    let topLeft = document.querySelector('.AboutThisUsHeight').clientWidth
    setHeightStyle({ height: (topLeft / 100) * 37.5 + 'px' })
  }, 10)
  return (
    <div className={lol.AboutThisUs}>
      <h2>Это мы</h2>
      <main>
        <div style={HeightStyle} className={lol.block + ' ' + lol.first + ' AboutThisUsHeight'}></div>
        <div style={HeightStyle} className={lol.block + ' ' + lol.second}></div>
        <div style={HeightStyle} className={lol.block + ' ' + lol.third}></div>
      </main>
      <center>
        <p>Наша команда состоит из высокоэффективных специалистов и профиссионалов своего дела</p>
        <AnimatedLine />

      </center>
    </div>
  )
} 
