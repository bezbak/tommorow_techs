import React, { useEffect, useRef } from 'react'
import lol from './AboutMission.module.scss'
import icon1 from './img/icon1.svg'
import icon2 from './img/icon2.svg'
import icon3 from './img/icon3.svg'
import icon4 from './img/icon4.svg'
import icon5 from './img/icon5.svg'

const AboutMission = () => {
  const containerRef = useRef(null)
  const mainRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && mainRef.current) {
        const scale = getComputedStyle(mainRef.current).transform
        const rect = mainRef.current.getBoundingClientRect()
        const scaleFactor = scale !== 'none' ? parseFloat(scale.match(/matrix\((\d\.\d+)/)[1]) : 1
        containerRef.current.style.width = `${rect.width * scaleFactor}px`
        containerRef.current.style.height = `${rect.height * scaleFactor}px`
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className={lol.liner}></div>
      <div className={lol.AboutMission}>
        <h2>Наша миссия</h2>
        <div className={lol.dynamicContainer} ref={containerRef}>
          <main ref={mainRef}>
            <div className={lol.blockFlex}>
              <div className={lol.top}>
                <img src={icon1} alt='' />
                <div className={lol.txt}>
                  <h3>Сделать бизнес удобным</h3>
                  <p>
                    Весь рутинный процесс в вашей деятельности оцифровывается и дает большие возможности для улучшения
                  </p>
                </div>
              </div>
              <div className={lol.top}>
                <img src={icon2} alt='' />
                <div className={lol.txt}>
                  <h3>Инновации</h3>
                  <p>Новые технологии и решения, что способствует инновациям и созданию конкурентных преимуществ.</p>
                </div>
              </div>
            </div>
            <div className={lol.blockFlex}>
              <div className={lol.bottom}>
                <img src={icon3} alt='' />
                <div className={lol.text}>
                  <h3>Безопасность и защита</h3>
                  <p>Включают в себя средства и методы для защиты информации и данных от киберугроз и утечек</p>
                </div>
              </div>
              <div className={lol.bottom}>
                <img src={icon4} alt='' />
                <div className={lol.text}>
                  <h3>Создание ценности</h3>
                  <p>
                    Мы верим, что технологии могут помочь вам создать долгосрочную ценность для вашей компании и ваших
                    клиентов.
                  </p>
                </div>
              </div>
              <div className={lol.bottom}>
                <img src={icon5} alt='' />
                <div className={lol.text}>
                  <h3>Цифровая трансформация</h3>
                  <p>
                    Мы поддерживаем вас в вашем пути к цифровой трансформации, что помогает укрепить
                    конкурентоспособность
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className={lol.line}></div>
    </>
  )
}

export default AboutMission
