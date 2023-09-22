import React from 'react'
import c from '../../innovations.module.scss'
import link_img from '../../image/link_img'

const Svg_5 = () => {
    return (
        <div className={`${c.Svg_5} ${c.block} Svg_5`}>
            <div className={c.Svg_5top}>
                <img src={link_img.magic} alt="" />
                <span>За последние 6 месяцев</span>
            </div>
            <div className={c.Svg_5_bottom}>
                <h2>15+</h2>
                <p>Выполненных проектов с высоким качеством</p>
            </div>
                
        </div>
    )
}

export default Svg_5