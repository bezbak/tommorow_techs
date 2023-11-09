import React, { useState } from 'react'
import lol from './AboutBanner.module.scss'
export default function AboutBanner() {
    const [HeightStyle, setHeightStyle] = useState({})
    setTimeout(() => {
        let topLeft = document.querySelector('.height').clientWidth
        setHeightStyle({ height: ((topLeft / 100) * 34.1) + 'px' })
    }, 10);
    return (
        <div className={lol.AboutBanner}>
            <div style={HeightStyle} className={lol.MainBlock + ' ' + lol.topLeft + ' height'}>

            </div>
            <div style={HeightStyle} className={lol.MainBlock + ' ' + lol.topRight}>

            </div>
            <div style={HeightStyle} className={lol.MainBlock + ' ' + lol.bottomLeft}>
                <div className={lol.phone}></div>
            </div>
            <div style={HeightStyle} className={lol.MainBlock + ' ' + lol.bottomCenter}>

            </div>
            <div style={HeightStyle} className={lol.MainBlock + ' ' + lol.bottomRight}>
                <div className={lol.bottomRight__1}>

                </div>
                <div className={lol.bottomRight__2}>

                </div>
                <div className={lol.bottomRight__3}>

                </div>
                <div className={lol.bottomRight__4}>

                </div>
            </div>
        </div>
    )
}
