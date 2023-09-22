import React from 'react'
import c from '../../innovations.module.scss'
import link_img from '../../image/link_img'

const Svg_7 = () => {
    return (
        <div className={`${c.Svg_7} ${c.block} Svg_7`}>
            <span>Статистика</span>
            <h2>Трафик</h2>
            <div className={c.Svg_7_bottom}>
                <div className={c.Svg_7_bottom_block}>
                    <div className={c.massage}>
                        <img src={link_img.insta} alt="" />
                        <b>instagram</b>
                    </div>
                    <div className={c.followers}>
                        641k
                    </div>
                    <div className={c.progress}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                            <path d="M3.15723 0.5L6.18832 5.75H0.126138L3.15723 0.5Z" fill="#44E760" />
                        </svg>
                        +15%
                    </div><hr />
                </div>
                <div className={c.Svg_7_bottom_block}>
                    <div className={c.massage}>
                        <img src={link_img.twitter} alt="" />
                        <b>twitter</b>
                    </div>
                    <div className={c.followers}>
                    115k
                    </div>
                    <div className={c.progress}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                            <path d="M3.15723 0.5L6.18832 5.75H0.126138L3.15723 0.5Z" fill="#44E760" />
                        </svg>
                        +7%
                    </div><hr />
                </div>
                <div className={c.Svg_7_bottom_block}>
                    <div className={c.massage}>
                        <img src={link_img.facebook} alt="" />
                        <b>facebook</b>
                    </div>
                    <div className={c.followers}>
                    90k
                    </div>
                    <div className={c.progress}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                            <path d="M3.15723 0.5L6.18832 5.75H0.126138L3.15723 0.5Z" fill="#44E760" />
                        </svg>
                        +5%
                    </div><hr />
                </div>
                <div className={c.Svg_7_bottom_block}>
                    <div className={c.massage}>
                        <img src={link_img.youtube} alt="" />
                        <b>youtube</b>
                    </div>
                    <div className={c.followers}>
                        12k
                    </div>
                    <div className={c.progress}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                            <path d="M3.15723 0.5L6.18832 5.75H0.126138L3.15723 0.5Z" fill="#44E760" />
                        </svg>
                        +3%
                    </div><hr />
                </div>
            </div>

        </div>
    )
}

export default Svg_7