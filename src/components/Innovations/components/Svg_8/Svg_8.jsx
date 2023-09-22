import React from 'react'
import c from '../../innovations.module.scss'
import link_img from '../../image/link_img'

const Svg_8 = () => {
    return (
        <div className={`${c.Svg_8} ${c.block} Svg_8`}>
            <span>Таймлайн</span>
            <h2>Стратегия разработки</h2>
            <div className={c.Svg_8_bottom}>
                <div className={c.Svg_8_left}>
                </div>
                <div className={c.Svg_8_right}>
                    <div className={c.c1 + ' ' + c.Svg_8_block}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 12 13" fill="none">
                            <path d="M11 12.125V10.875C11 10.212 10.7366 9.57607 10.2678 9.10723C9.79893 8.63839 9.16304 8.375 8.5 8.375H3.5C2.83696 8.375 2.20107 8.63839 1.73223 9.10723C1.26339 9.57607 1 10.212 1 10.875V12.125" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 5.875C7.38071 5.875 8.5 4.75571 8.5 3.375C8.5 1.99429 7.38071 0.875 6 0.875C4.61929 0.875 3.5 1.99429 3.5 3.375C3.5 4.75571 4.61929 5.875 6 5.875Z" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                            <p>Клиентоореинтрованность</p>
                            Ну кароче начинаем с этого потом это ну как ожидалось потом это потом другое
                        </div>
                    </div>
                    <div className={c.c2 + ' ' + c.Svg_8_block}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 14 15" fill="none">
                            <path d="M13 10.1393V4.80601C12.9998 4.57219 12.938 4.34255 12.821 4.14011C12.704 3.93768 12.5358 3.76958 12.3333 3.65267L7.66667 0.986006C7.46397 0.868981 7.23405 0.807373 7 0.807373C6.76595 0.807373 6.53603 0.868981 6.33333 0.986006L1.66667 3.65267C1.46418 3.76958 1.29599 3.93768 1.17897 4.14011C1.06196 4.34255 1.00024 4.57219 1 4.80601V10.1393C1.00024 10.3732 1.06196 10.6028 1.17897 10.8052C1.29599 11.0077 1.46418 11.1758 1.66667 11.2927L6.33333 13.9593C6.53603 14.0764 6.76595 14.138 7 14.138C7.23405 14.138 7.46397 14.0764 7.66667 13.9593L12.3333 11.2927C12.5358 11.1758 12.704 11.0077 12.821 10.8052C12.938 10.6028 12.9998 10.3732 13 10.1393Z" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.18018 4.11267L7.00018 7.47934L12.8202 4.11267" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 14.1926V7.47263" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                            <p>UX анализ/инструменты</p>
                            Ну кароче начинаем с этого потом это ну
                            как ожидалось потом это потом другое
                        </div>
                    </div>
                    <div className={c.c3 + ' ' + c.Svg_8_block}>
                        <img src={link_img.svg_8_img} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Svg_8