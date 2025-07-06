import React, { useLayoutEffect, useRef, useState } from 'react'
import c from './innovations.module.scss'
import './innovation.scss'

import Svg_1 from './components/Svg_1/Svg_1'
import Svg_2 from './components/Svg_2/Svg_2'
import link_img from './image/link_img'
import Svg_3 from './components/Svg_3/Svg_3'
import Svg_4 from './components/Svg_4/Svg_4'
import Svg_5 from './components/Svg_5/Svg_5'
import Svg_8 from './components/Svg_8/Svg_8'
import Svg_7 from './components/Svg_7/Svg_7'
import Svg_6 from './components/Svg_6/Svg_6'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Innovations = () => {
  const [lol_X, setLol_X] = useState(0)
  const [lol_Y, setLol_Y] = useState(0)

  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const Svg_1 = document.querySelector('.Svg_1');
      const Svg_8 = document.querySelector('.Svg_8');
      const column_1 = document.querySelector('.column_1');
      const column_2 = document.querySelector('.column_2');
      const column_4 = document.querySelector('.column_4');
      const column_5 = document.querySelector('.column_5');
      const okno_lol = document.querySelector('.okno_lol');


      // okno_lol//////////////
      gsap.to(okno_lol, {
        // yPercent: -100, 
        ease:'ease-out',
        scrollTrigger: {
          trigger: okno_lol,
          start: '5% 90%',
          end: '40% 70%',
          scrub: 2,
          maxWidth:'1000px',
        },
      });
      // okno_lol////////////
      
      // Svg_1//////////////
      gsap.to(Svg_1, {
        ease:'ease-out',
        opacity: 0.5,
        scale: 1,
        scrollTrigger: {
          trigger: Svg_1,
          start: '5% 90%',
          end: '40% 70%',
          scrub: 2,
        },
      });
      // Svg_1////////////
      
      // Svg_8//////////////
      gsap.to(Svg_8, {
        ease:'ease-out',
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: Svg_8,
          start: '5% 90%',
          end: '40% 70%',
          scrub: 2,
        },
      });
      // Svg_8////////////
      
      
      // column_1//////////////
      gsap.to(column_1, {
        y: -200,
        
        ease:'ease-out',
        scrollTrigger: {
          trigger: column_1,
          start: '30% 50%',
          end: '50% -70%',
          scrub: 2,
          // markers: true,
        },
      });
      // column_1////////////
      
      // column_2//////////////
      gsap.to(column_2, {
        y: -200,
        scrollTrigger: {
          trigger: column_2,
          start: '30% 10%',
          end: '100% -120%',
          scrub: 2,
          // markers: true,
        },
      });
      // column_2////////////
      
      // column_4//////////////
      gsap.to(column_4, {
        y: -200,
        scrollTrigger: {
          trigger: column_4,
          start: '30% 50%',
          end: '50% -70%',
          scrub: 2,
          // markers: true,
        },
      });
      // column_4////////////

      // column_5//////////////
      gsap.to(column_5, {
        y: -100,
        scrollTrigger: {
          trigger: column_5,
          start: '30% 70%',
          end: '50% -120%',
          scrub: 2,
          // markers: true,
        },
      });
      // column_5////////////

    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div onMouseMove={e => {
        setLol_X(e.movementX)
        setLol_Y(e.screenY)
      }} className={c.Innovations}>
        <div className={c.main_widht + ' okno_lol'}>
          <button className={c.Only_innovation_btn}>✨ Только инновации
            <span>
              <img src={link_img.cursor} alt="" />
            </span>
          </button>
          <h1>Последние методы <br /> разработки для <br /> новых решений</h1>
        </div>
        <div className={c.full_size_main}>
          <div className={c.main}>
            <div className={c.column + ' column_1 ' + c.c1}>
              <Svg_1 lol_X={lol_X} lol_Y={lol_Y} />
              <Svg_2 />
            </div>
            <div className={c.column + ' column_2 ' + c.c2}>
              <Svg_3 />
              <Svg_4 />
            </div>
            <div className={c.column + ' column_3 ' + c.c3}>
              <Svg_5 />
            </div>
            <div className={c.column + ' column_4 ' + c.c4}>
              <Svg_6 />
            </div>
            <div className={c.column + ' column_5 ' + c.c5}>
              <Svg_7 />
              <Svg_8 />
            </div>

          </div>
          <div className={`${c.main} ${c.media}`}>
            <div className={c.column + ' column_5 ' + c.c1}>
              <Svg_2 />
              <Svg_5 />
              <Svg_3 />
              <Svg_4 />
            </div>
            <div className={c.column + ' ' + c.c2}>
              <Svg_1 />
              <Svg_7 />
              <Svg_8 />
              <Svg_6 />
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Innovations