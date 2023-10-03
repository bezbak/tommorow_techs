// @ts-nocheck
import React, { useLayoutEffect, useRef } from 'react'
// @ts-ignore
import c from './portfolio.module.scss'
import './portfolio.scss'
import img_1 from '../img/portfolioImg_1.png'
import img_2 from '../img/portfolioImg_2.png'
import img_3 from '../img/portfolioImg_3.png'
import utitled from '../img/Untitled.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {

  const main = useRef();
  useLayoutEffect(() => {
    let width = window.innerWidth
    const ctx = gsap.context((self) => {
      const myElement = document.querySelector('.myElement');
      const imgs_1 = document.querySelector('.imgs_1');
      const imgs_2 = document.querySelector('.imgs_2');
      const imgs_3 = document.querySelector('.imgs_3');
      const scroll_block_inner = document.querySelector('.scroll_block_inner');
      gsap.to(myElement, {
        scrollTrigger: {
          trigger: myElement,
          start: "top top",
          end: "+=5000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
      });


      gsap.to(imgs_1, {
        y:
          width < 700 ? 400 :
            500

        ,
        scrollTrigger: {

          trigger: imgs_1,
          start: "+=1000px",
          endTrigger: myElement,
          end: "+=1000",
          scrub: 1.1,
          // markers: true,
          anticipatePin: 1,
        },
      });
      gsap.to(imgs_2, {
        y: 
        width<700?15:

        30
        ,
        scale: 1,
        scrollTrigger: {
          trigger: imgs_1,
          start: "+=1000px",
          endTrigger: myElement,
          end: "+=1000",
          scrub: 1.1,
          // markers: true,
          anticipatePin: 1,
        },
      });
      gsap.to(imgs_3, {

        y: width<700?15:30,
        scale: .9,
        scrollTrigger: {
          trigger: imgs_1,
          start: "+=1000px",
          endTrigger: myElement,
          end: "+=1000",
          scrub: 1.1,
          // markers: true,
          anticipatePin: 1,
          onEnter: () => { document.querySelector('.img_block1').classList.add(c.lol1) },
          onEnterBack: () => { document.querySelector('.img_block1').classList.remove(c.lol1) },

        },
      });
      gsap.to(scroll_block_inner, {
        height: '100%',
        scrollTrigger: {
          trigger: imgs_1,
          start: "+=1000px",
          endTrigger: myElement,
          end: "+=5000",
          scrub: 1.1,
          // markers: true,
          anticipatePin: 1,
        },
      });


      //////////////
      gsap.to(imgs_2, {
        y: 500,
        scrollTrigger: {
          trigger: imgs_1,
          start: "+=2500px",
          endTrigger: myElement,
          end: "+=1000",
          scrub: 1.1,
          // markers: true,
          anticipatePin: 1,
          // onEnter: () => { document.querySelector('.img_block1').classList.add('lol2') },
          // onLeave: () => { document.querySelector('.img_block1').classList.remove('lol2') },
          onEnter: () => { document.querySelector('.img_block1').classList.add(c.lol2) },
          onEnterBack: () => { document.querySelector('.img_block1').classList.remove(c.lol2) },

        },
      });
      gsap.to(imgs_3, {
        y: width<700?15:30,
        scale: 1,
        scrollTrigger: {
          trigger: imgs_1,
          start: "+=2500px",
          endTrigger: myElement,
          end: "+=1000",
          scrub: 1.1,
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
          <div className={c.img_block + ' img_block1'}>
            <img src={img_1} alt="" className={'imgs_1 ' + c.portfolio_image + ' ' + c.c1} />
            <img src={img_2} alt="" className={'imgs_2 ' + c.portfolio_image + ' ' + c.c2} />
            <img src={img_3} alt="" className={'imgs_3 ' + c.portfolio_image + ' ' + c.c3} />
            <div className={c.scroll_block + ' scroll_block'}>
              <div className={c.scroll_block_inner + ' scroll_block_inner'}></div>
            </div>
          </div>
          <div className={c.portfolio_image_link}>
            <a href="" className={c.portfolio_link + ' ' + c.c1}>Kelvin
              <div className={c.portfolio_link_images}>
                <img src={utitled} alt="" className={c.portfolio_link_logo} />
              </div>
            </a>
            <a href="" className={c.portfolio_link}>OshTV</a>
            <a href="" className={c.portfolio_link}>Karagay</a>
            <a href="" className={c.portfolio_link}>BazaZum</a>
            <a href="" className={c.portfolio_link} >Vizion Group</a>
          </div>
        </div>
        <div className={c.portfolio_image_link + ' ' + c.media}>
          <a href="" className={c.portfolio_link + ' ' + c.c1}>Kelvin</a>
          <a href="" className={c.portfolio_link}>OshTV</a>
          <a href="" className={c.portfolio_link}>Karagay</a>
          <a href="" className={c.portfolio_link}>BazaZum</a>
          <a href="" className={c.portfolio_link} >Vizion Group</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio