import React from 'react'
import c from '../../innovations.module.scss'
import link_img from '../../image/link_img'

const Svg_4 = () => {
    return (
        <div className={`${c.Svg_4} ${c.block} Svg_4`}>
            <div className={c.Svg_4_block}>
                <img src={link_img.figma_logo} alt="" />
            </div>
            <div className={c.Svg_4_right}>
                <p>UX/UI Design Platform</p>
                <span>www.figma.com</span>
            </div>
                
        </div>
    )
}

export default Svg_4