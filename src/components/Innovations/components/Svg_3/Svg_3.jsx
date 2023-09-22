import React from 'react'
import c from '../../innovations.module.scss'
import link_img from '../../image/link_img'

const Svg_3 = () => {
    return (
        <div className={`${c.Svg_3} ${c.block} Svg_3`}>
            <span>Core base</span>
            <h2>Gallery board</h2>
            <img src={link_img.svg_3_img} alt="" />
            <div className={c.Svg_3_bottom}>
                <span>Case “iBaza”</span>
                <p>1/6</p>
            </div>
        </div>
    )
}

export default Svg_3