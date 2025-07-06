import React, { useState, useEffect, useRef } from 'react'
import scss from './advantages.module.scss'
import dottetSrc from './Rectangle 38.svg'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Advantages = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const slidersRef = useRef(null);
  const rootRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const root = rootRef.current;
    const sliders = slidersRef.current;
    if (!root || !sliders) return;

    gsap.to([root, sliders], {
      scrollTrigger: {
        trigger: sliders,
        start: 'bottom center',
        end: 'top top',
        scrub: true,
        // markers: true, // для отладки
      },
      width: '95%',
      ease: 'none',
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className={`size-1400 ${scss.advantages} advantages`}>
      <div ref={rootRef} className={scss.wrapper}></div>
      <div className={scss.advantages_text}>
        <h3>Спектор наших услуг</h3>
        <h1>
          Рост вашего бизнеса с нами — это гарантировано
        </h1>
      </div>
      <div className={scss.advantages_container_wrap}>


        <div className={scss.advantages_container}>
          <div className={scss.advantages_block}>
            <div className={scss.advantages_block_text}>
              <h2 className={scss.advantages_block_text_header}>
                Автоматизация
                процессов
              </h2>
              <p className={scss.advantages_block_text_body}>
                мы поможем вам оптимизировать и автоматизировать внутренние процессы, такие как учет, управление проектами, коммуникации и другие, что значительно повысит производительность и уменьшит рутинную работу.
              </p>
            </div>
          </div>
          <div className={scss.advantages_block}>
            <div className={scss.advantages_block_text}>
              <h2 className={scss.advantages_block_text_header}>
                Разработка и поддержка построения веб-сайта:
              </h2>
              <p className={scss.advantages_block_text_body}>
                мы создадим для вас высококачественный и привлекательный веб-сайт, который поможет вам привлечь новых клиентов, предоставить им необходимую информацию о вашей компании и услугах, а также обеспечит удобство взаимодействия.
              </p>
            </div>
          </div>
          <div className={scss.advantages_block}>

            <div className={scss.advantages_block_text}>
              <h2 className={scss.advantages_block_text_header}>
                Автоматизация
                процессов
              </h2>
              <p className={scss.advantages_block_text_body}>
                мы поможем вам оптимизировать и автоматизировать внутренние процессы, такие как учет, управление проектами, коммуникации и другие, что значительно повысит производительность и уменьшит рутинную работу.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className={scss.sliders_wrap}>


        <div className={scss.sliders} ref={slidersRef} >


          <div className={scss.slider} style={{ transform: `translateX(-${scrollPosition / 2}px)` }}> <div className={scss.slide}> <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
            <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
            <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
            <div className={scss.slide_dotted}>
              <img src={dottetSrc} alt="" />
            </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
            <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>   <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
            <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
            <div className={scss.slide_dotted}>
              <img src={dottetSrc} alt="" />
            </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
            <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>   <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
            <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
            <div className={scss.slide_dotted}>
              <img src={dottetSrc} alt="" />
            </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
            <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1> </div></div>
          <div className={scss.slider} style={{ transform: `translateX(-${scrollPosition / 3 - 100}px)` }}>
            <div className={scss.slide}>
              <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ
              </h1><div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
              <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1><div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1><div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>    <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
              <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
              <div className={scss.slide_dotted}>
                <img src={dottetSrc} alt="" />
              </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
              <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>   <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
              <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
              <div className={scss.slide_dotted}>
                <img src={dottetSrc} alt="" />
              </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
              <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages
