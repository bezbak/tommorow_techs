// @ts-nocheck
import React, { useLayoutEffect, useRef } from 'react'
// @ts-ignore
import c from './portfolio.module.scss'
import './portfolio.scss'
import img_1 from '../img/Frame 4722.png'
import img_2 from '../img/Frame 4724.svg'
import img_3 from '../img/Frame 4725.svg'
import utitled from '../img/Untitled.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {

  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const myElement = document.querySelector('.myElement');
      const imgs = document.querySelector('.imgs');
      gsap.to(myElement, {
        scrollTrigger: {
          trigger: myElement,
          start: "top top",
          end: "+=4500",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
      });
      gsap.to(imgs, {
        y: -700,
        scrollTrigger: {
          trigger: myElement,
          start: "bottom bottom",
          endTrigger: '.adaptiveBlock',
          end: "+=4000",
          scrub: 1.5,
          // markers: true,
          anticipatePin: 1,
        },
      });

    }, main);
    return () => ctx.revert();
  }, []);




  return (
    <div id='myElement' className={c.parent + ' myElement'}>
      <div className={c.porfolio}>
        <div className={c.portfolio_text}>
          <a href="" className={c.porfolio_link}>Проекты, над которыми работали наши разработчики</a>
          <h1 className={c.porfolio_big}>Kelvin</h1>
          <p className={c.porfolio_smol}>Ну кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далее</p>
        </div>
        <div className={c.portfolio_image}>
          <div className={c.fortfolio_images_0}>
            <div className={'imgs'}>
              <img src={img_1} alt="" className={c.portfolio_image_1} />
              <img src={img_2} alt="" className={c.portfolio_image_1 + ' ' + c.portfolio_image_2} />
              <img src={img_3} alt="" className={c.portfolio_image_1, c.portfolio_image_3} />

            </div>
          </div>
          <div className={c.portfolio_image_link}>
            <div className={c.portfolio_link_1}>
              <a href="" className={c.portfolio_link_2}>Kelvin</a>
              <div className={c.portfolio_link_images}>
                <img src={utitled} alt="" className={c.portfolio_link_logo} />
              </div>
            </div>
            <a href="" className={c.portfolio_link}>OshTV</a>
            <a href="" className={c.portfolio_link}>Karagay</a>
            <a href="" className={c.portfolio_link}>BazaZum</a>
            <a href="" className={c.portfolio_link}>Vizion Group</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio