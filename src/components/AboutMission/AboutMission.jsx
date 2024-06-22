import React, { useState } from 'react'
import lol from './AboutMission.module.scss'
import icon1 from './img/icon1.svg'
import icon2 from './img/icon2.svg'
import icon3 from './img/icon3.svg'
import icon4 from './img/icon4.svg'
import icon5 from './img/icon5.svg'
export default function AboutMission() {
    const [HeightStyle, setHeightStyle] = useState({})
    // const [HeightStyle2, setHeightStyle2] = useState({})
    setTimeout(() => {
        let topLeft = document.querySelector('.MissionHeight').clientWidth
        // let topLeft2 = document.querySelector('.MissionHeight2').clientWidth
        setHeightStyle({ height: ((topLeft / 100) * 100) + 'px' })
        // setHeightStyle2({ height: topLeft2 + 'px' })
    }, 10);
    return (
        <div className={lol.AboutMission}>
            <h2>Наша миссия</h2>
            <main>
                <div style={HeightStyle} className={lol.block + ' MissionHeight ' + lol.c1}>
                    <img src={icon1} alt="" />
                    <h3>Сделать бизнес удобным</h3>
                    <p>Вес рутинный процесс в вашей деятельности оцифрововается и дает большие возможности для улучшения</p>
                </div>
                <div style={HeightStyle} className={lol.block + ' ' + lol.c1}>
                    <img src={icon2} alt="" />
                    <h3>Инновации</h3>
                    <p>новые технологии и решения, что способствует инновациям и созданию конкурентных преимуществ.</p>
                </div>
                <div className={lol.block + ' MissionHeight2 ' + lol.c2}>
                    <img src={icon3} alt="" />
                    <h3>Безопасность и защита</h3>
                    <p>включают в себя средства и методы для защиты информации и данных от киберугроз и утечек</p>
                </div>
                <div className={lol.block + ' ' + lol.c2}>
                    <img src={icon4} alt="" />
                    <h3>Создание ценности</h3>
                    <p>Мы верим, что технологии могут помочь вам создать долгосрочную ценность для вашей компании и ваших клиентов.</p>
                </div>
                <div className={lol.block + ' ' + lol.c2}>
                    <img src={icon5} alt="" />
                    <h3>Цифровая трансформация</h3>
                    <p>Мы поддерживаем вас в вашем пути к цифровой трансформации, что помогает укрепить конкурентоспособность</p>
                </div>
            </main>
        </div>
    )
}   
