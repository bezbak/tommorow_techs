import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Banner } from '../../components'
import scss from './Beginning.module.scss'
import mapSrc from './map.svg'
import Advantages from '../../components/Advantages/Advantages'
import Progres from '../../components/Progress/Progress'
import Innovations from '../../components/Innovations/Innovations'
import AdaptiveBlock from '../../components/AdaptiveBlock/AdaptiveBlock'
import Footer from '../../components/Footer/Footer'
import Portfolio from '../../components/Portfolio/Portfolio'
const Beginning = () => {
  return (
    <div className={scss.beginning}>
      <div className={scss.relative}>
        <Banner />
        <div className={scss.freeConsultation}>
          <img src={mapSrc} alt="" />
          <button>Бесплатная консультация</button>
        </div>
        <Innovations />
        <Progres />
        <Portfolio />
        <AdaptiveBlock />
          <Advantages />
      </div>
        <Footer />
    </div>
  )
}

export default Beginning
